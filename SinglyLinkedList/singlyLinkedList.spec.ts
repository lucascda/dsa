import { SinglyLinkedList } from "./singlyLinkedList";

describe("SinglyLinkedList", () => {
  let list = new SinglyLinkedList();

  describe("#isEmpty", () => {
    it("returns true if it is empty", () => {
      const result = list.isEmpty();

      expect(result).toBe(true);
    });
  });
});
