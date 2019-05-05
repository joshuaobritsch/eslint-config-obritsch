module.exports = {
  rules: {
    // enforces getter/setter pairs in objects
    'accessor-pairs': 'off',

    // enforces return statements in callbacks of array's methods
    // http://eslint.org/docs/rules/array-callback-return
    'array-callback-return': 'warn',

    // treat var statements as if they were block scoped
    'block-scoped-var': 'warn',

    // specify the maximum cyclomatic complexity allowed in a program
    complexity: ['off', 11],

    // require return statements to either always or never specify values
    'consistent-return': 'warn',

    // specify curly brace conventions for all control statements
    curly: ['warn', 'multi-line'],

    // require default case in switch statements
    'default-case': ['warn', { commentPattern: '^no default$' }],

    // encourages use of dot notation whenever possible
    'dot-notation': ['warn', { allowKeywords: true }],

    // enforces consistent newlines before or after dots
    // http://eslint.org/docs/rules/dot-location
    'dot-location': ['warn', 'property'],

    // require the use of === and !==
    // http://eslint.org/docs/rules/eqeqeq
    eqeqeq: ['warn', 'allow-null'],

    // make sure for-in loops have an if statement
    'guard-for-in': 'warn',

    // disallow the use of alert, confirm, and prompt
    'no-alert': 'warn',

    // disallow use of arguments.caller or arguments.callee
    'no-caller': 'warn',

    // disallow lexical declarations in case/default clauses
    // http://eslint.org/docs/rules/no-case-declarations.html
    'no-case-declarations': 'warn',

    // disallow division operators explicitly at beginning of regular expression
    // http://eslint.org/docs/rules/no-div-regex
    'no-div-regex': 'off',

    // disallow else after a return in an if
    'no-else-return': 'warn',

    // disallow empty functions, except for standalone funcs/arrows
    // http://eslint.org/docs/rules/no-empty-function
    'no-empty-function': ['warn', {
      allow: [
        'arrowFunctions',
        'functions',
        'methods'
      ]
    }],

    // disallow empty destructuring patterns
    // http://eslint.org/docs/rules/no-empty-pattern
    'no-empty-pattern': 'warn',

    // disallow comparisons to null without a type-checking operator
    'no-eq-null': 'off',

    // disallow use of eval()
    'no-eval': 'warn',

    // disallow adding to native types
    'no-extend-native': 'warn',

    // disallow unnecessary function binding
    'no-extra-bind': 'warn',

    // disallow Unnecessary Labels
    // http://eslint.org/docs/rules/no-extra-label
    'no-extra-label': 'warn',

    // disallow fallthrough of case statements
    'no-fallthrough': 'warn',

    // disallow the use of leading or trailing decimal points in numeric literals
    'no-floating-decimal': 'warn',

    // disallow reassignments of native objects or read-only globals
    // http://eslint.org/docs/rules/no-global-assign
    'no-global-assign': ['warn', { exceptions: [] }],

    // disallow implicit type conversions
    // http://eslint.org/docs/rules/no-implicit-coercion
    'no-implicit-coercion': ['warn', {
      boolean: false,
      number: true,
      string: true,
      allow: []
    }],

    // disallow var and named functions in global scope
    // http://eslint.org/docs/rules/no-implicit-globals
    'no-implicit-globals': 'off',

    // disallow use of eval()-like methods
    'no-implied-eval': 'warn',

    // disallow this keywords outside of classes or class-like objects
    'no-invalid-this': 'warn',

    // disallow usage of __iterator__ property
    'no-iterator': 'warn',

    // disallow use of labels for anything other then loops and switches
    'no-labels': ['warn', { allowLoop: false, allowSwitch: false }],

    // disallow unnecessary nested blocks
    'no-lone-blocks': 'warn',

    // disallow creation of functions within loops
    'no-loop-func': 'warn',

    // disallow magic numbers
    // http://eslint.org/docs/rules/no-magic-numbers
    'no-magic-numbers': ['warn', {
      ignore: [],
      ignoreArrayIndexes: true,
      enforceConst: true,
      detectObjects: false
    }],

    // disallow use of multiple spaces
    'no-multi-spaces': 'warn',

    // disallow use of multiline strings
    'no-multi-str': 'warn',

    // disallow reassignments of native objects
    // TODO: deprecated in favor of no-global-assign
    'no-native-reassign': 'off',

    // disallow use of new operator when not part of the assignment or comparison
    'no-new': 'warn',

    // disallow use of new operator for Function object
    'no-new-func': 'warn',

    // disallows creating new instances of String, Number, and Boolean
    'no-new-wrappers': 'warn',

    // disallow use of (old style) octal literals
    'no-octal': 'warn',

    // disallow use of octal escape sequences in string literals, such as
    // var foo = 'Copyright \251';
    'no-octal-escape': 'warn',

    // disallow reassignment of function parameters
    // disallow parameter object manipulation
    // rule: http://eslint.org/docs/rules/no-param-reassign.html
    'no-param-reassign': ['warn', { props: true }],

    // disallow usage of __proto__ property
    'no-proto': 'warn',

    // disallow declaring the same variable more then once
    'no-redeclare': 'warn',

    // disallow use of assignment in return statement
    'no-return-assign': 'warn',

    // disallow use of `javascript:` urls.
    'no-script-url': 'warn',

    // disallow self assignment
    // http://eslint.org/docs/rules/no-self-assign
    'no-self-assign': 'warn',

    // disallow comparisons where both sides are exactly the same
    'no-self-compare': 'warn',

    // disallow use of comma operator
    'no-sequences': 'warn',

    // restrict what can be thrown as an exception
    'no-throw-literal': 'warn',

    // disallow unmodified conditions of loops
    // http://eslint.org/docs/rules/no-unmodified-loop-condition
    'no-unmodified-loop-condition': 'off',

    // disallow usage of expressions in statement position
    'no-unused-expressions': ['warn', {
      allowShortCircuit: false,
      allowTernary: false
    }],

    // disallow unused labels
    // http://eslint.org/docs/rules/no-unused-labels
    'no-unused-labels': 'warn',

    // disallow unnecessary .call() and .apply()
    'no-useless-call': 'off',

    // disallow useless string concatenation
    // http://eslint.org/docs/rules/no-useless-concat
    'no-useless-concat': 'warn',

    // disallow unnecessary string escaping
    // http://eslint.org/docs/rules/no-useless-escape
    'no-useless-escape': 'warn',

    // disallow use of void operator
    // http://eslint.org/docs/rules/no-void
    'no-void': 'warn',

    // disallow usage of configurable warning terms in comments: e.g. todo
    'no-warning-comments': ['off', { terms: ['todo', 'fixme', 'xxx'], location: 'start' }],

    // disallow use of the with statement
    'no-with': 'warn',

    // require use of the second argument for parseInt()
    radix: 'warn',

    // requires to declare all vars on top of their containing scope
    'vars-on-top': 'warn',

    // require immediate function invocation to be wrapped in parentheses
    // http://eslint.org/docs/rules/wrap-iife.html
    'wrap-iife': ['warn', 'outside'],

    // require or disallow Yoda conditions
    yoda: 'warn'
  }
};
