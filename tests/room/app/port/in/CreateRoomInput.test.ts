import CreateRoomInput from "../../../../../src/room/app/port/in/CreateRoomInput";
import initializeConfigVariable from "../../../../initializeConfigVariable";
import ValidationError from "../../../../../src/error/ValidationError";

describe("CreateRoomInput", () => {
  beforeAll(() => {
    initializeConfigVariable();
  });

  test("validate should pass", () => {
    new CreateRoomInput(10, 100, true);
  });

  test("validate should error with minimum participation user", () => {
    expect(() => new CreateRoomInput(2, 100, true)).toThrow(ValidationError);
  });

  test("validate should error with maximum participation user", () => {
    expect(() => new CreateRoomInput(500, 100, true)).toThrow(ValidationError);
  });

  test("validate should error with maximum time limit", () => {
    expect(() => new CreateRoomInput(10, 100000, true)).toThrow(ValidationError);
  });
});
