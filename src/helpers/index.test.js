import React from "react";
import { formatNumber, getImageHelper } from ".";

describe("Helpers", () => {
  describe("getImageHelper", () => {
    describe("when there is an image path", () => {
      it("resolves to an image from the API", () => {
        // Arrange
        const params = {
          className: "classname",
          imgPath: "path",
          baseUrl: "baseUrl",
          logoSize: "logoSize",
          placeholder: "placeholderAPI",
          alt: "alt",
        };

        // Act
        const result = getImageHelper(params);
        // Assert
        expect(result).toEqual(
          <img alt="alt" className="classname" src="baseUrl/logoSize/path" />
        );
      });
    });

    describe("when there is NOT an image path", () => {
      it("resolves to a image from the placeholder API", () => {
        // Arrange
        const params = {
          className: "classname",
          imgPath: null,
          baseUrl: "baseUrl",
          logoSize: "logoSize",
          placeholder: "placeholderAPI",
          alt: "alt",
        };

        // Act
        const result = getImageHelper(params);
        // Assert
        expect(result).toEqual(
          <img alt="alt" className="classname" src="placeholderAPI" />
        );
      });
    });
  });

  describe("formatNumber", () => {
    it("resolves to a number correctly formatted", () => {
      // Arrange
      const number = 4000.0145;

      // Act
      const result = formatNumber(number, 0);

      // Assert
      expect(result).toEqual("4000");
    });
  });
});
