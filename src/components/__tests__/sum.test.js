import sum from "../sum";
test("Sum Function should calculate Sum", () => {
    const res = sum(4, 7);

    // Assertion
    expect(res).toBe(11);
})