import { SinglyLinkedList } from "./singlyLinkedList";

describe("SinglyLinkedList", () => {
  describe("#isEmpty", () => {
    let list: SinglyLinkedList<any>;

    beforeEach(() => (list = new SinglyLinkedList()));

    it("returns true if it is empty", () => {
      const result = list.isEmpty();

      expect(result).toBe(true);
    });
  });

  describe("#append", () => {
    let list: SinglyLinkedList<any>;
    const cases = [
      [10, 20],
      [40, 60],
      [80, 100],
    ];

    beforeEach(() => {
      list = new SinglyLinkedList();
    });

    it("appends node to its tail", () => {
      const data = 2;

      list.append(data);

      expect(list.isEmpty()).toBe(false);
      expect(list.getHead().data).toBe(2);
    });

    it.each(cases)(
      "given %p as firstNode and %p as secondNode, append them to list",
      (firstElement, secondElement) => {
        list.append(firstElement);
        list.append(secondElement);

        expect(list.size()).toBe(2);
        expect(list.getHead().data).toBe(firstElement);
        expect(list.getTail().data).toBe(secondElement);
      }
    );
  });
});
