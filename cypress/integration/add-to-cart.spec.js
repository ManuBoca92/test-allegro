/// <reference types="Cypress" />

function pickRandomItem(item) {
    return item[Math.floor(Math.random() * item.length)];
}

describe("Add to cart test", () => {
    before("runs before all steps", () => {
        cy.clearCookies();
        cy.visit(
            "/kategoria/komputery?bmatch=baseline-product-cl-eyesa2-engag-dict45-ele-1-4-0513"
        );
    });

    it("selects a product", () => {
        cy.get('[data-role="close-and-accept-consent"]').click();
        cy.get('[class="_9c44d_1V-js"]')
            .first()
            .click();
    });

    it("adds a product to cart", () => {
        cy.get('button[id="add-to-cart-button"]').click();
    });

    it("checks that product has been added to cart", () => {
        cy.get('a[class="_1bo4a _sizcr _xu6h2 _w7z6o _uj8z7"]').click();
        cy.url().should("contain", "/koszyk");
        cy.get('h2[class="_1s2v1 _19nmf"]').should(
            "not.contain",
            "Twój koszyk jest pusty"
        );
    });
});
