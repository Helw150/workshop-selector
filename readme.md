Workshop Selector Tool for AFS Uddannelsesbazaar 2015
=====================================================

Simple server that prompts the visitor for a set of questions to decide which workshop schedule is the most appropriate for her. Crafted in AngularJS 1.0 and ExpressJS in NodeJS for AFS Interkultur Denmark on a late summerday in Copenhagen.

**Features**
 - Simple algorithm for selecting workshops given a set of questions
 - Easily add new questions and configurations
 - Super small

**Configuration**
The config.js makes up the configuration for workshop selector. There are three different components that must be set:
 - Questions component: Contains an array of objects, where each object denotes a question id, the question itself, an error message and the options. Each option has a name and a unique value.
 - Suggestions component: An array of object where each object contains the workshops for the workshop slots denoted by the keys. Note that the order of the suggestions matters when identifying a combination with a suggestion.
 - Combinations component: A collection of objects and keys where the object suggestion value is paired with the suggestion entry in the suggestions component. The criteria is a list of lists, in which the list entry number correspond to the question number, and requires that the given value is select for this combination to be considered. If the list entry is an array, that means that multiple question selections will get accepted. If several of the combinations matches the selection, the first one that matches will be picked.