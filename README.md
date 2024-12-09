# k6-tests

Load/Stress tests with k6, an example project

**_How to run the project_**

- You need to have nodejs and Docker in your environment.

**_Project Structure_**

    - The project is structured in a main folder called "tests". Inside the main folder, you will find the folders "support" and "api".


        - API:

            - Here you will create your files to write your tests.

        - Support:

            - Here you have a file named "requestConfig.js", in this file you should configure all your baseUrls and headers that are default to your requests. You need to configure it according to your APIs and environment;
            - Also, there's a folder named "payloads". Inside this folder you should create your files if you need to use the dataFaker, you can see the example in "createUser.js". It will use the "dataFaker.js" that is already configured using chance.

**_Using javascript packages in k6:_**

    - As much as we write k6 tests in javascript, in background it runs with Go. It means that k6 will not accept javascript directly. In order to do so, I've configured Babel to transpile the code to javascript, this way we are able to use our dataFaker with chance. To do so, you need to pay attention in the inside "webpack.config.js".

        - **_webpack.config.js_**:
            - In line 3 of the webpack, you have an object named "entry", inside this object you need to configure your test script that will be in package.json;

            ```javascript
            example: "./tests/api/scaleUpAndDown.test.js"
            ```

            - The "example" is the name that you are given to your transpiled file saved in the dist folder, it will automatically add .test.js at the end of the name, and the path "./tests/api/scaleUpAndDown.test.js" is the test location of your test file.

**_My test file:_**

    - I created a ramp up and down test inside /tests/api, a very common strategy in the payments market. It consist in configure an exact number of TPS(transaction per second) to run in a certain amount of time to see how the system reacts.

I hope you learned something here, thanks! :)
