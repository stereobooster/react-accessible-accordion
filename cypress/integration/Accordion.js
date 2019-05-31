describe("Accordion", () => {
  before(() => {
    cy.visit("/");
  });

  describe("Mouse", () => {
    xit("When clicks on the accordion header of a collapsed section, expands the section", () => {});
    xit("When clicks on the accordion header of a expanded section, collapse the section", () => {});
  });

  describe("Space or Enter", () => {
    it("When focus is on the accordion header of a collapsed section, expands the section", () => {});
    // not from a11y guide
    xit("When focus is on the accordion header of a expanded section, collapse the section", () => {});
  });

  describe("Tab", () => {
    xit("Moves focus to the next focusable element.", () => {});
    xit("All focusable elements in the accordion are included in the page Tab sequence.", () => {});
  });

  describe("Shift + Tab", () => {
    xit("Moves focus to the previous focusable element.", () => {});
    xit("All focusable elements in the accordion are included in the page Tab sequence.", () => {});
  });

  describe("Down Arrow", () => {
    xit("When focus is on an accordion header, moves focus to the next accordion header", () => {});
    xit("When focus is on last accordion header, moves focus to first accordion header", () => {});
  });

  describe("Up Arrow", () => {
    xit("When focus is on an accordion header, moves focus to the previous accordion header", () => {});
    xit("When focus is on last accordion header, moves focus to first accordion header", () => {});
  });

  describe("Home", () => {
    xit("When focus is on an accordion header, moves focus to the first accordion header.", () => {});
  });

  describe("End", () => {
    it("When focus is on an accordion header, moves focus to the last accordion header.", () => {});
  });
});
