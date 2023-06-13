import { loadFeature, defineFeature } from "jest-cucumber";

const feature = loadFeature("./cucumber/features/demo.feature");

defineFeature(feature, (test) => {

    test("Demo Scenario", ({ given, when, then }) => {

        given(/^To check if given step is called and print something$/, () => {
        });

        when(/^To check if When step is called and print something$/, () => {
        });

        then(/^To check if Then step is called and print something$/, () => {
        });
    });
});