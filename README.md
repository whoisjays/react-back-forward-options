# react-back-forward-options

`react-back-forward-options` is a custom React hook that provides functionality for navigating back and forward through a list of options. It takes an array of options and returns an object with methods and data to manage the navigation.

## Installation

To use react-back-forward-options, you need to have React and TypeScript installed in your project. Then, you can install the package using your preferred package manager:

`npm install react-back-forward-options`

## Usage

Import hook from react-back-forward-options:

`import {useBackForwardOptions} from 'react-back-forward-options';`

Then, use the useBackForwardOptions hook in your component:

    const MyComponent: React.FC = () => {
        const options = [...];

        // Use the useBackForwardOptions hook

        const { onForwardClickHandler, onBackClickHandler, options, currentOption } =
        useBackForwardOptions({ options });

        return (
            <div>...</div>
        );
    };

## Hook API

The 'useBackForwardOptions' hook returns an object with the following properties:

`onForwardClickHandler`
A function that advances to the next option in the list, if available.

`onBackClickHandler`
A function that moves to the previous option in the list, if available.

`options`
The array of options passed to the hook.

`currentOption`
The currently selected option in the list.
