const soliditySyntax = [
    // Compiler Directives
    { category: "Compiler Directives" },
    {
        name: "Pragma Directive",
        syntax: "pragma solidity ^0.8.0;",
        description: "Specifies the compiler version"
    },
    {
        name: "Importing Other Contracts",
        syntax: "import \"./$OtherContract$.sol\";",
        description: "Dependency management"
    },

    // Contract Structure
    { category: "Contract Structure" },
    {
        name: "Contract Declaration",
        syntax: "contract $MyContract$ {}",
        description: "Defines a new smart contract"
    },
    {
        name: "Interfaces",
        syntax: "interface $IERC20$ { function $transfer$($address$ $to$, $uint256$ $amount$) external returns ($bool$); }",
        description: "Abstract contract definitions"
    },
    {
        name: "Inheritance",
        syntax: "contract $Child$ is $Parent$ {}",
        description: "Contract inheritance"
    },
    {
        name: "Using Libraries",
        syntax: "using $SafeMath$ for $uint256$;",
        description: "Library attachment to types"
    },

    // Data Types & Variables
    { category: "Data Types & Variables" },
    {
        name: "State Variables",
        syntax: "$uint256$ public $myNumber$;",
        description: "Variables stored on the blockchain"
    },
    {
        name: "Structs",
        syntax: "struct $Person$ { $string$ $name$; $uint$ $age$; }",
        description: "Custom data structures"
    },
    {
        name: "Enums",
        syntax: "enum $State$ { $Created$, $Active$, $Inactive$ }",
        description: "Custom type with discrete values"
    },
    {
        name: "Arrays",
        syntax: "$uint256$[] public $dynamicArray$; $uint256$[5] public $fixedArray$;",
        description: "Collection types"
    },
    {
        name: "Mappings",
        syntax: "mapping($address$ => $uint256$) public $balances$;",
        description: "Key-value storage"
    },
    {
        name: "Type Conversions",
        syntax: "$uint8$ $y$ = $uint8$($x$);",
        description: "Explicit type conversion"
    },

    // Functions
    { category: "Functions" },
    {
        name: "Functions",
        syntax: "function $myFunction$($uint256$ $x$) public view returns ($uint256$) {}",
        description: "Executable code blocks"
    },
    {
        name: "Function Modifiers",
        syntax: "modifier $onlyOwner$() { require($msg.sender$ == $owner$, \"Not owner\"); _; }",
        description: "Reusable function guards"
    },
    {
        name: "Function Visibility",
        syntax: "function $publicFunc$() public {}",
        description: "Controls access to functions"
    },
    {
        name: "Function State Mutability",
        syntax: "function $viewFunc$() view returns ($uint$) {}",
        description: "Specifies function's interaction with state"
    },
    {
        name: "Constructor",
        syntax: "constructor() { $owner$ = $msg.sender$; }",
        description: "Initialization function"
    },
    {
        name: "Fallback Function",
        syntax: "fallback() external payable {}",
        description: "Default function when no other matches"
    },
    {
        name: "Receive Ether Function",
        syntax: "receive() external payable {}",
        description: "Handles plain Ether transfers"
    },
    {
        name: "Function Calls",
        syntax: "this.$myFunction$(); $otherContract$.$function$();",
        description: "Internal and external calls"
    },

    // Events & Logging
    { category: "Events & Logging" },
    {
        name: "Events",
        syntax: "event $ValueChanged$($address$ indexed $changer$, $uint256$ $newValue$);",
        description: "Emitted for off-chain consumption"
    },

    // Control Structures
    { category: "Control Structures" },
    {
        name: "Conditionals",
        syntax: "if ($x$ > 10) {} else {}",
        description: "Control flow"
    },
    {
        name: "Loops",
        syntax: "for ($uint$ $i$ = 0; $i$ < 10; $i$++) {} while ($x$ > 0) { $x$--; }",
        description: "Iteration structures"
    },
    {
        name: "Error Handling",
        syntax: "require($condition$, \"Error message\"); assert($condition$); revert(\"Error message\");",
        description: "Exception handling"
    },

    // Blockchain Interactions
    { category: "Blockchain Interactions" },
    {
        name: "Address Operations",
        syntax: "$address$ payable $recipient$ = payable($0x123...$); $recipient$.transfer($amount$);",
        description: "Address type utilities"
    },
    {
        name: "Global Variables",
        syntax: "$msg.sender$; $msg.value$; $block.timestamp$;",
        description: "Blockchain context variables"
    },
    {
        name: "Delegated Calls",
        syntax: "($bool$ $success$, ) = $address$($otherContract$).delegatecall($abi.encodeWithSignature$(\"$function$()\"));",
        description: "Delegate execution context"
    },
    {
        name: "Selfdestruct",
        syntax: "selfdestruct(payable($recipient$));",
        description: "Contract termination"
    },

    // Data Manipulation
    { category: "Data Manipulation" },
    {
        name: "ABI Encoding/Decoding",
        syntax: "$abi.encode$(...); $abi.decode$($bytesData$, ($types$));",
        description: "Data serialization"
    },

    // Low-Level Operations
    { category: "Low-Level Operations" },
    {
        name: "Assembly (Inline)",
        syntax: "assembly { /* Yul code */ }",
        description: "Low-level EVM operations"
    }
];

export default soliditySyntax;