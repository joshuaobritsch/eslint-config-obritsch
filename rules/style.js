module.exports = {
  rules: {
    // enforce spacing inside array brackets
    'array-bracket-spacing': ['warn', 'never'],

    // enforce spacing inside single-line blocks
    // http://eslint.org/docs/rules/block-spacing
    'block-spacing': ['warn', 'always'],

    // enforce one true brace style
    'brace-style': ['warn', '1tbs', { allowSingleLine: true }],

    // require camel case names
    camelcase: ['warn', { properties: 'never' }],

    // enforce spacing before and after comma
    'comma-spacing': ['warn', { before: false, after: true }],

    // enforce one true comma style
    'comma-style': ['warn', 'last'],

    // disallow padding inside computed properties
    'computed-property-spacing': ['warn', 'never'],

    // enforces consistent naming when capturing the current execution context
    'consistent-this': 'off',

    // enforce newline at the end of file, with no multiple empty lines
    'eol-last': 'warn',

    // enforce spacing between functions and their invocations
    // http://eslint.org/docs/rules/func-call-spacing
    // TODO: enable, semver-minor
    'func-call-spacing': ['off', 'never'],

    // require function expressions to have a name
    'func-names': 'warn',

    // enforces use of function declarations or expressions
    'func-style': 'off',

    // Blacklist certain identifiers to prevent them being used
    // http://eslint.org/docs/rules/id-blacklist
    'id-blacklist': 'off',

    // this option enforces minimum and maximum identifier lengths
    // (variable names, property names etc.)
    'id-length': 'off',

    // require identifiers to match the provided regular expression
    'id-match': 'off',

    // this option sets a specific tab width for your code
    // http://eslint.org/docs/rules/indent
    indent: ['warn', 2, { SwitchCase: 1, VariableDeclarator: 1, outerIIFEBody: 1 }],

    // specify whether double or single quotes should be used in JSX attributes
    // http://eslint.org/docs/rules/jsx-quotes
    'jsx-quotes': ['off', 'prefer-double'],

    // enforces spacing between keys and values in object literal properties
    'key-spacing': ['warn', { beforeColon: false, afterColon: true }],

    // require a space before & after certain keywords
    'keyword-spacing': ['warn', {
      before: true,
      after: true,
      overrides: {
        return: { after: true },
        throw: { after: true },
        case: { after: true }
      }
    }],

    // disallow mixed 'LF' and 'CRLF' as linebreaks
    // http://eslint.org/docs/rules/linebreak-style
    'linebreak-style': ['warn', 'unix'],

    // enforces empty lines around comments
    'lines-around-comment': 'off',

    // specify the maximum depth that blocks can be nested
    'max-depth': ['off', 4],

    // specify the maximum length of a line in your program
    // http://eslint.org/docs/rules/max-len
    'max-len': ['warn', 80, 2, {
      ignoreUrls: true,
      ignoreComments: false
    }],

    // specify the max number of lines in a file
    // http://eslint.org/docs/rules/max-lines
    'max-lines': ['off', {
      max: 300,
      skipBlankLines: true,
      skipComments: true
    }],

    // specify the maximum depth callbacks can be nested
    'max-nested-callbacks': 'off',

    // limits the number of parameters that can be used in the function declaration.
    'max-params': ['off', 3],

    // specify the maximum number of statement allowed in a function
    'max-statements': ['off', 10],

    // restrict the number of statements per line
    // http://eslint.org/docs/rules/max-statements-per-line
    'max-statements-per-line': ['warn', { max: 1 }],

    // require multiline ternary
    // http://eslint.org/docs/rules/multiline-ternary
    'multiline-ternary': 'off',

    // require a capital letter for constructors
    'new-cap': ['warn', { newIsCap: true }],

    // disallow the omission of parentheses when invoking a constructor with no arguments
    // http://eslint.org/docs/rules/new-parens
    'new-parens': 'warn',

    // allow/disallow an empty newline after var statement
    'newline-after-var': 'warn',

    // http://eslint.org/docs/rules/newline-before-return
    'newline-before-return': 'warn',

    // enforces new line after each method call in the chain to make it
    // more readable and easy to maintain
    // http://eslint.org/docs/rules/newline-per-chained-call
    'newline-per-chained-call': ['warn', { ignoreChainWithDepth: 4 }],

    // disallow use of the Array constructor
    'no-array-constructor': 'warn',

    // disallow use of bitwise operators
    // http://eslint.org/docs/rules/no-bitwise
    // TODO: enable
    'no-bitwise': 'off',

    // disallow use of the continue statement
    // http://eslint.org/docs/rules/no-continue
    'no-continue': 'off',

    // disallow comments inline after code
    'no-inline-comments': 'off',

    // disallow if as the only statement in an else block
    // http://eslint.org/docs/rules/no-lonely-if
    'no-lonely-if': 'warn',

    // disallow un-paren'd mixes of different operators
    // http://eslint.org/docs/rules/no-mixed-operators
    'no-mixed-operators': ['off', {
      groups: [
        ['+', '-', '*', '/', '%', '**'],
        ['&', '|', '^', '~', '<<', '>>', '>>>'],
        ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
        ['&&', '||'],
        ['in', 'instanceof']
      ],
      allowSamePrecedence: false
    }],

    // disallow mixed spaces and tabs for indentation
    'no-mixed-spaces-and-tabs': 'warn',

    // disallow multiple empty lines and only one newline at the end
    'no-multiple-empty-lines': ['warn', { max: 1, maxEOF: 1 }],

    // disallow negated conditions
    // http://eslint.org/docs/rules/no-negated-condition
    'no-negated-condition': 'off',

    // disallow nested ternary expressions
    'no-nested-ternary': 'warn',

    // disallow use of the Object constructor
    'no-new-object': 'warn',

    // disallow use of unary operators, ++ and --
    'no-plusplus': 'off',

    // disallow certain syntax forms
    // http://eslint.org/docs/rules/no-restricted-syntax
    'no-restricted-syntax': [
      'error',
      'DebuggerStatement',
      'ForInStatement',
      'LabeledStatement',
      'WithStatement',
    ],

    // disallow space between function identifier and application
    'no-spaced-func': 'warn',

    // disallow tab characters entirely
    // TODO: enable
    'no-tabs': 'warn',

    // disallow the use of ternary operators
    'no-ternary': 'off',

    // disallow trailing whitespace at the end of lines
    'no-trailing-spaces': 'warn',

    // disallow dangling underscores in identifiers
    'no-underscore-dangle': ['off', { allowAfterThis: false }],

    // disallow the use of Boolean literals in conditional expressions
    // also, prefer `a || b` over `a ? a : b`
    // http://eslint.org/docs/rules/no-unneeded-ternary
    'no-unneeded-ternary': ['warn', { defaultAssignment: false }],

    // disallow whitespace before properties
    // http://eslint.org/docs/rules/no-whitespace-before-property
    'no-whitespace-before-property': 'warn',

    // require padding inside curly braces
    'object-curly-spacing': ['warn', 'always'],

    // enforce line breaks between braces
    // http://eslint.org/docs/rules/object-curly-newline
    // TODO: enable once https://github.com/eslint/eslint/issues/6488 is resolved
    'object-curly-newline': ['off', {
      ObjectExpression: { minProperties: 0, multiline: true },
      ObjectPattern: { minProperties: 0, multiline: true }
    }],

    // enforce "same line" or "multiple line" on object properties.
    // http://eslint.org/docs/rules/object-property-newline
    'object-property-newline': ['warn', {
      allowMultiplePropertiesPerLine: true
    }],

    // allow just one var statement per function
    'one-var': ['warn', 'never'],

    // require a newline around variable declaration
    // http://eslint.org/docs/rules/one-var-declaration-per-line
    'one-var-declaration-per-line': ['warn', 'always'],

    // require assignment operator shorthand where possible or prohibit it entirely
    // http://eslint.org/docs/rules/operator-assignment
    'operator-assignment': ['warn', 'always'],

    // enforce operators to be placed before or after line breaks
    'operator-linebreak': 'off',

    // enforce padding within blocks
    'padded-blocks': ['warn', 'never'],

    // require quotes around object literal property names
    // http://eslint.org/docs/rules/quote-props.html
    'quote-props': ['warn', 'as-needed', { keywords: false, unnecessary: true, numbers: false }],

    // specify whether double or single quotes should be used
    quotes: ['warn', 'single', { avoidEscape: true }],

    // do not require jsdoc
    // http://eslint.org/docs/rules/require-jsdoc
    'require-jsdoc': 'off',

    // require or disallow use of semicolons instead of ASI
    semi: ['error', 'always'],

    // enforce spacing before and after semicolons
    'semi-spacing': ['warn', { before: false, after: true }],

    // requires object keys to be sorted
    'sort-keys': ['warn', 'asc', { caseSensitive: false, natural: true }],

    // sort variables within the same declaration block
    'sort-vars': 'warn',

    // require or disallow space before blocks
    'space-before-blocks': 'warn',

    // require or disallow space before function opening parenthesis
    // http://eslint.org/docs/rules/space-before-function-paren
    'space-before-function-paren': ['warn', { anonymous: 'always', named: 'never' }],

    // require or disallow spaces inside parentheses
    'space-in-parens': ['warn', 'never'],

    // require spaces around operators
    'space-infix-ops': 'warn',

    // Require or disallow spaces before/after unary operators
    // http://eslint.org/docs/rules/space-unary-ops
    'space-unary-ops': ['warn', {
      words: true,
      nonwords: false,
      overrides: {
      }
    }],

    // require or disallow a space immediately following the // or /* in a comment
    'spaced-comment': ['warn', 'always', {
      exceptions: ['-', '+'],
      markers: ['=', '!']           // space here to support sprockets directives
    }],

    // require or disallow the Unicode Byte Order Mark
    // http://eslint.org/docs/rules/unicode-bom
    'unicode-bom': ['warn', 'never'],

    // require regex literals to be wrapped in parentheses
    'wrap-regex': 'off'
  }
};
