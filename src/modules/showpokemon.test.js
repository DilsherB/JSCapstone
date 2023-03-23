import { createListItem } from "./showPokemon.js";
describe("createListItem", () => {
  let pokemonData;
  let listItem;

  beforeEach(async () => {
    // Set up the fake API response data
    pokemonData = {
      id: 1,
      name: "bulbasaur",
      sprites: {
        front_default: "https://example.com/image.png",
      },
    };

    const mockApiResponse = [{ item_id: 1, likes: 5 }];

    // Set up the fake fetch function to return the mock API response data
    global.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        json: () => Promise.resolve(mockApiResponse),
      });
    });

    // Call the function to create the list item
    listItem = await createListItem(pokemonData);
  });

  afterEach(() => {
    // Reset the mock fetch function
    jest.resetAllMocks();
  });

  describe("like button", () => {
    it("should display the initial number of likes", () => {
      const likeCount = listItem.querySelector(".badge");
      expect(likeCount.textContent).toEqual("5");
    });

    it("should update the number of likes when clicked", async () => {
      const likeButton = listItem.querySelector(".like-button");
      const likeCount = listItem.querySelector(".badge");

      // Simulate a click on the like button
      likeButton.click();

      // Check that the number of likes has been updated
      expect(likeCount.textContent).toEqual("6");
    });

    it("should revert the number of likes if the API call fails", async () => {
      // Mock the API call to return an error
      global.fetch.mockImplementationOnce(() => Promise.reject());

      const likeButton = listItem.querySelector(".like-button");
      const likeCount = listItem.querySelector(".badge");

      // Simulate a click on the like button
      likeButton.click();

      // Wait for the API call to complete
      await Promise.resolve();

      // Check that the number of likes has been reverted to the previous count
      expect(likeCount.textContent).toEqual("5");
    });
  });
});
