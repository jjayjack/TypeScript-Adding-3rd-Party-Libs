# TypeScript-Adding-3rd-Party-Libs

Third party libraries when writing code help us add functionality and details that let's our code do what we want it to do. Within this Repo, I will be exploring [Normal libraries](#normal-libraries) that are able to be used in JavaScript & TypeScript and [TypeScript-Specific libraries](#typescript-adding-3rd-party-libs).

## Normal Libraries

To utilize any JavaScript normal library there are added dependencies to make sure TypeScript can read the file.

### Lodash Library

[Lodash](https://lodash.com/) is a JavaScript library that helps with managing methods that utilize priminitive and non-primitive data types.
**Required**
Type package that will indicate to TypeScript how to read the installed library.
`npm i --save-dev @types/lodash`
These installations includ **d.ts** files that contain how file works and how TS will read it.
