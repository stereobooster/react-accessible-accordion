describe("Accordion", () => {
  before(() => {
    cy.visit("/");
  });

  describe("Mouse", () => {
    it("When clicks on the accordion header of a collapsed section, expands the section", () => {
      cy.get("body")
        .find("[role=region]")
        .last()
        .should("have.attr", "hidden");

      cy.get("body")
        .find("[role=button]")
        .last()
        .click();

      cy.get("body")
        .find("[role=region]")
        .last()
        .should("not.have.attr", "hidden");
    });

    it("When clicks on the accordion header of a expanded section, collapse the section", () => {
      cy.get("body")
        .find("[role=region]")
        .last()
        .should("not.have.attr", "hidden");

      cy.get("body")
        .find("[role=button]")
        .last()
        .click();

      cy.get("body")
        .find("[role=region]")
        .last()
        .should("have.attr", "hidden");
    });
  });

  describe("Space or Enter", () => {
    it("When focus is on the accordion header of a collapsed section, expands the section", () => {
      cy.get("body")
        .find("[role=region]")
        .first()
        .should("have.attr", "hidden");

      cy.get("body")
        .find("[role=button]")
        .first()
        .focus();

      cy.focused().type(" ");

      cy.get("body")
        .find("[role=region]")
        .first()
        .should("not.have.attr", "hidden");
    });

    // not from a11y guide
    it("When focus is on the accordion header of a expanded section, collapse the section", () => {
      cy.get("body")
        .find("[role=region]")
        .first()
        .should("not.have.attr", "hidden");

      cy.get("body")
        .find("[role=button]")
        .first()
        .focus();

      cy.focused().type(" ");

      cy.get("body")
        .find("[role=region]")
        .first()
        .should("have.attr", "hidden");
    });
  });

  describe("Tab", () => {
    it("Moves focus to the next focusable element.", () => {
      cy.get("body").blur();
      cy.get("body").tab();
      cy.focused().contains("section 1");
    });
    it("All focusable elements in the accordion are included in the page Tab sequence.", () => {
      cy.focused().tab();
      cy.focused().contains("section 2");
      cy.focused().tab();
      cy.focused().contains("test link");
    });
  });

  describe("Shift + Tab", () => {
    it("Moves focus to the previous focusable element.", () => {
      cy.get("button").focus();
      cy.focused().tab({ shift: true });
      cy.focused().contains("section 3");
    });
    it("All focusable elements in the accordion are included in the page Tab sequence.", () => {
      cy.focused().tab({ shift: true });
      cy.focused().contains("test link");
      cy.focused().tab({ shift: true });
      cy.focused().contains("section 2");
    });
  });

  describe("Down Arrow", () => {
    it("When focus is on an accordion header, moves focus to the next accordion header", () => {
      cy.contains("section 1").focus();
      cy.focused().type("{downarrow}");
      cy.focused().contains("section 2");
    });

    it("When focus is on last accordion header, moves focus to first accordion header", () => {
      cy.contains("section 3").focus();
      cy.focused().type("{downarrow}");
      cy.focused().contains("section 1");
    });
  });

  describe("Up Arrow", () => {
    it("When focus is on an accordion header, moves focus to the previous accordion header", () => {
      cy.contains("section 2").focus();
      cy.focused().type("{uparrow}");
      cy.focused().contains("section 1");
    });

    it("When focus is on last accordion header, moves focus to first accordion header", () => {
      cy.contains("section 1").focus();
      cy.focused().type("{uparrow}");
      cy.focused().contains("section 3");
    });
  });

  describe("Home", () => {
    it("When focus is on an accordion header, moves focus to the first accordion header.", () => {
      cy.contains("section 2").focus();
      cy.focused().type("{home}");
      cy.focused().contains("section 1");
    });
  });

  describe("End", () => {
    it("When focus is on an accordion header, moves focus to the last accordion header.", () => {
      cy.contains("section 2").focus();
      cy.focused().type("{end}");
      cy.focused().contains("section 3");
    });
  });
});
