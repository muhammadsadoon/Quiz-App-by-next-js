export default interface QuestionTypes {
    questionId: number,
    question: string,
    answer: string,
    options: string[],
    hints?: string[]
}[]

/** Shuffle array using Fisher-Yates algorithm */
export const shuffleArray = <T,>(arr: T[]): T[] => {
    const shuffled = [...arr];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
};

const htmlQuestions: QuestionTypes[] = [
    {
        questionId: 1,
        question: "What does HTML stand for?",
        answer: "HyperText Markup Language",
        options: [
            "HyperText Markup Language",
            "HighText Machine Language",
            "Hyper Transfer Markup Level",
            "Home Tool Markup Language"
        ],
        hints: ["The standard markup language for web pages", "Starts with 'HyperText'"]
    },
    {
        questionId: 2,
        question: "Which HTML tag is used to define the largest heading?",
        answer: "<h1>",
        options: ["<h1>", "<h6>", "<head>", "<title>"],
        hints: ["Heading tag", "The highest number is not the largest"]
    },
    {
        questionId: 3,
        question: "Which HTML tag is used to create a hyperlink?",
        answer: "<a>",
        options: ["<a>", "<link>", "<href>", "<url>"],
        hints: ["Anchor tag", "Uses the 'href' attribute"]
    },
    {
        questionId: 4,
        question: "Which HTML element is used to insert an image?",
        answer: "<img>",
        options: ["<img>", "<image>", "<pic>", "<src>"],
        hints: ["Self-closing tag", "Uses 'src'"]
    },
    {
        questionId: 5,
        question: "Which attribute is used in HTML to define inline styles?",
        answer: "style",
        options: ["style", "class", "css", "format"],
        hints: ["Starts with 's'", "Used directly in the tag"]
    },
    {
        questionId: 6,
        question: "Which HTML tag is used to define a paragraph?",
        answer: "<p>",
        options: ["<p>", "<para>", "<paragraph>", "<pg>"],
        hints: ["Only one letter", "Most basic text block"]
    },
    {
        questionId: 7,
        question: "Which tag is used to create an unordered list?",
        answer: "<ul>",
        options: ["<ul>", "<ol>", "<li>", "<list>"],
        hints: ["Used with <li> tags", "Bullet list"]
    },
    {
        questionId: 8,
        question: "What is the correct HTML element for inserting a line break?",
        answer: "<br>",
        options: ["<br>", "<break>", "<lb>", "<hr>"],
        hints: ["Self-closing", "Short form of 'break'"]
    },
    {
        questionId: 9,
        question: "Which tag is used to define the title of a webpage?",
        answer: "<title>",
        options: ["<title>", "<header>", "<head>", "<meta>"],
        hints: ["Appears on browser tab", "Inside <head>"]
    },
    {
        questionId: 10,
        question: "Which tag is used to play a video file in HTML?",
        answer: "<video>",
        options: ["<video>", "<movie>", "<media>", "<player>"],
        hints: ["Supports controls attribute", "Self-descriptive name"]
    },
    {
        questionId: 11,
        question: "Which element is used to define a table row?",
        answer: "<tr>",
        options: ["<tr>", "<td>", "<th>", "<row>"],
        hints: ["Starts with 't'", "Part of table"]
    },
    {
        questionId: 12,
        question: "Which HTML attribute specifies an alternate text for an image?",
        answer: "alt",
        options: ["title", "text", "alt", "description"],
        hints: ["Important for accessibility", "Short form of 'alternative'"]
    },
    {
        questionId: 13,
        question: "Which tag is used to create a dropdown list?",
        answer: "<select>",
        options: ["<dropdown>", "<select>", "<option>", "<list>"],
        hints: ["Works with <option>", "Used in forms"]
    },
    {
        questionId: 14,
        question: "Which attribute is used to uniquely identify an HTML element?",
        answer: "id",
        options: ["id", "class", "name", "unique"],
        hints: ["Used once per element", "Also used in JS selectors"]
    },
    {
        questionId: 15,
        question: "Which HTML tag is used to create a checkbox?",
        answer: "<input type='checkbox'>",
        options: [
            "<input type='checkbox'>",
            "<checkbox>",
            "<check>",
            "<input checkbox>"
        ],
        hints: ["Uses input element", "Has a type attribute"]
    },
    {
        questionId: 16,
        question: "What does the <hr> tag represent?",
        answer: "A horizontal line",
        options: [
            "A horizontal line",
            "A hard rule",
            "A hidden row",
            "A highlighted region"
        ],
        hints: ["Used for separation", "Self-closing tag"]
    },
    {
        questionId: 17,
        question: "Which tag is used for creating a text input field?",
        answer: "<input type='text'>",
        options: [
            "<input type='text'>",
            "<textbox>",
            "<text>",
            "<input text>"
        ],
        hints: ["Very common form element", "Uses type attribute"]
    },
    {
        questionId: 18,
        question: "Which HTML tag defines emphasized text (usually italic)?",
        answer: "<em>",
        options: ["<em>", "<i>", "<strong>", "<italic>"],
        hints: ["Semantic tag", "Not <i>"]
    },
    {
        questionId: 19,
        question: "Which HTML tag is used to embed JavaScript?",
        answer: "<script>",
        options: ["<script>", "<js>", "<javascript>", "<code>"],
        hints: ["Used inside head or body", "Executes logic"]
    },
    {
        questionId: 20,
        question: "Which HTML element is used to group block-level content?",
        answer: "<div>",
        options: ["<div>", "<section>", "<block>", "<group>"],
        hints: ["Most common container", "Often used with classes"]
    }
];

const cssQuestions: QuestionTypes[] = [
    {
        questionId: 1,
        question: "What does CSS stand for?",
        answer: "Cascading Style Sheets",
        options: [
            "Cascading Style Sheets",
            "Creative Simple Styling",
            "Colorful Style System",
            "Computer Style Sheets"
        ],
        hints: ["Defines presentation of HTML", "Starts with 'Cascading'"]
    },
    {
        questionId: 2,
        question: "Which CSS property is used to change the text color?",
        answer: "color",
        options: ["color", "text-color", "font-color", "text-style"],
        hints: ["Same name as 'font-color' meaning", "Common property"]
    },
    {
        questionId: 3,
        question: "Which property controls the size of text?",
        answer: "font-size",
        options: ["font-size", "text-size", "size", "font-style"],
        hints: ["Uses 'font' prefix", "Measured in px, rem, em"]
    },
    {
        questionId: 4,
        question: "Which CSS property is used to change the background color?",
        answer: "background-color",
        options: ["background-color", "bg-color", "color-bg", "back-color"],
        hints: ["Starts with 'background'", "Ends with 'color'"]
    },
    {
        questionId: 5,
        question: "Which property is used to change the font of an element?",
        answer: "font-family",
        options: ["font-family", "font-style", "font-weight", "font-name"],
        hints: ["Used to apply Google Fonts", "Defines the typeface"]
    },
    {
        questionId: 6,
        question: "Which CSS property is used to change the spacing between lines?",
        answer: "line-height",
        options: ["line-height", "line-space", "spacing", "height-line"],
        hints: ["Controls readability", "Measured in numbers or units"]
    },
    {
        questionId: 7,
        question: "Which CSS property makes text bold?",
        answer: "font-weight",
        options: ["font-weight", "bold", "font-style", "text-weight"],
        hints: ["Accepts values like 400, 700", "Not the 'bold' property"]
    },
    {
        questionId: 8,
        question: "Which property is used to center text horizontally?",
        answer: "text-align",
        options: ["text-align", "align-text", "center-text", "justify"],
        hints: ["Used often with headings", "Value can be 'center'"]
    },
    {
        questionId: 9,
        question: "Which CSS property controls the space inside an element's border?",
        answer: "padding",
        options: ["padding", "margin", "spacing", "border-spacing"],
        hints: ["Inner spacing", "Not margin"]
    },
    {
        questionId: 10,
        question: "Which CSS property controls the space outside an element?",
        answer: "margin",
        options: ["margin", "padding", "gap", "offset"],
        hints: ["Outer spacing", "Forms layout gaps"]
    },
    {
        questionId: 11,
        question: "Which property is used to add a shadow to text?",
        answer: "text-shadow",
        options: ["text-shadow", "shadow-text", "font-shadow", "shadow"],
        hints: ["Has x, y, blur values", "Used for glowing effects"]
    },
    {
        questionId: 12,
        question: "Which property is used to control the layout's main axis in flexbox?",
        answer: "flex-direction",
        options: ["flex-direction", "flex-flow", "direction", "align-items"],
        hints: ["Row or column", "Primary axis"]
    },
    {
        questionId: 13,
        question: "Which CSS property makes an element disappear but keep its space?",
        answer: "visibility: hidden",
        options: [
            "visibility: hidden",
            "display: none",
            "opacity: 0",
            "hide: true"
        ],
        hints: ["Space remains", "Not display:none"]
    },
    {
        questionId: 14,
        question: "Which property is used to make corners of a box rounded?",
        answer: "border-radius",
        options: ["border-radius", "corner-round", "radius", "round-corner"],
        hints: ["Used in card UI", "Measured in px or %"]
    },
    {
        questionId: 15,
        question: "Which CSS unit is relative to the root HTML font size?",
        answer: "rem",
        options: ["rem", "em", "px", "%"],
        hints: ["Root element based", "Better for accessibility"]
    },
    {
        questionId: 16,
        question: "Which property controls the opacity of an element?",
        answer: "opacity",
        options: ["opacity", "visibility", "filter", "alpha"],
        hints: ["Range is 0 to 1", "Used for fade effects"]
    },
    {
        questionId: 17,
        question: "Which CSS property sets the element's position type?",
        answer: "position",
        options: ["position", "display", "float", "align"],
        hints: ["Values: absolute, relative, fixed", "Controls placement"]
    },
    {
        questionId: 18,
        question: "Which property is used to create a transition effect?",
        answer: "transition",
        options: ["transition", "animate", "effect", "timing"],
        hints: ["Used with hover effects", "Controls duration"]
    },
    {
        questionId: 19,
        question: "Which CSS property is used to stack elements vertically or horizontally?",
        answer: "display: flex",
        options: [
            "display: flex",
            "display: block",
            "display: grid",
            "display: inline"
        ],
        hints: ["Modern layout system", "Used for alignment"]
    },
    {
        questionId: 20,
        question: "Which property is used to set a background image?",
        answer: "background-image",
        options: ["background-image", "image", "bg-img", "background-src"],
        hints: ["Uses url()", "Part of background properties"]
    }
];

const javascriptQuestions: QuestionTypes[] = [
    {
        questionId: 1,
        question: "Which keyword is used to declare a variable in JavaScript?",
        answer: "let",
        options: ["let", "var", "const", "int"],
        hints: ["Modern way to declare variables", "Block scoped"]
    },
    {
        questionId: 2,
        question: "Which method is used to print output to the console?",
        answer: "console.log()",
        options: ["console.log()", "print()", "write()", "debug()"],
        hints: ["Common debugging tool", "Starts with 'console'"]
    },
    {
        questionId: 3,
        question: "Which symbol is used for strict equality comparison?",
        answer: "===",
        options: ["===", "==", "!=", "="],
        hints: ["Checks value and type", "Triple equal"]
    },
    {
        questionId: 4,
        question: "How do you write an arrow function in JavaScript?",
        answer: "() => {}",
        options: ["() => {}", "function()", "=> function", "{} => ()"],
        hints: ["ES6 feature", "Uses =>"]
    },
    {
        questionId: 5,
        question: "Which array method adds an element at the end?",
        answer: "push",
        options: ["push", "pop", "shift", "unshift"],
        hints: ["Opposite of pop", "Changes array length"]
    },
    {
        questionId: 6,
        question: "What does JSON stand for?",
        answer: "JavaScript Object Notation",
        options: [
            "JavaScript Object Notation",
            "Java Source Open Network",
            "Java Syntax Organized Node",
            "JS Object Navigation"
        ],
        hints: ["Used for API data", "Starts with JavaScript"]
    },
    {
        questionId: 7,
        question: "Which keyword is used to create a constant variable?",
        answer: "const",
        options: ["const", "constant", "let", "var"],
        hints: ["Cannot be reassigned", "Block scoped"]
    },
    {
        questionId: 8,
        question: "Which function converts a string to an integer?",
        answer: "parseInt",
        options: ["parseInt", "Number", "toInt", "convertInt"],
        hints: ["Starts with 'parse'", "Takes string and radix"]
    },
    {
        questionId: 9,
        question: "Which array method removes the first element?",
        answer: "shift",
        options: ["shift", "unshift", "pop", "splice"],
        hints: ["Opposite of unshift", "Changes index"]
    },
    {
        questionId: 10,
        question: "What is the output of typeof [] in JavaScript?",
        answer: "object",
        options: ["object", "array", "list", "undefined"],
        hints: ["Arrays inherit from objects", "A common trick question"]
    },
    {
        questionId: 11,
        question: "Which loop executes at least once even if the condition is false?",
        answer: "do...while",
        options: ["do...while", "for", "while", "foreach"],
        hints: ["Condition checked at the end", "Starts with 'do'"]
    },
    {
        questionId: 12,
        question: "Which operator is used to spread array elements?",
        answer: "... (spread operator)",
        options: ["...", "**", "=>", "??"],
        hints: ["Three dots", "Also used for objects"]
    },
    {
        questionId: 13,
        question: "What is the correct way to write an array in JavaScript?",
        answer: "[1, 2, 3]",
        options: ["[1, 2, 3]", "(1, 2, 3)", "{1, 2, 3}", "<1,2,3>"],
        hints: ["Uses square brackets", "Comma separated values"]
    },
    {
        questionId: 14,
        question: "Which method converts an array into a string?",
        answer: "join",
        options: ["join", "toString", "stringify", "implode"],
        hints: ["Takes a separator", "Used to create sentences"]
    },
    {
        questionId: 15,
        question: "What will 5 + '5' return in JavaScript?",
        answer: "55",
        options: ["55", "10", "5", "Undefined"],
        hints: ["String concatenation", "JavaScript is loosely typed"]
    },
    {
        questionId: 16,
        question: "Which symbol is used for logical AND?",
        answer: "&&",
        options: ["&&", "||", "&", "and"],
        hints: ["Two ampersands", "Checks both conditions"]
    },
    {
        questionId: 17,
        question: "Which keyword is used to handle errors?",
        answer: "try...catch",
        options: ["try...catch", "throw", "error", "catchOnly"],
        hints: ["Used with throw", "Two parts"]
    },
    {
        questionId: 18,
        question: "Which method is used to remove duplicates from an array?",
        answer: "[...new Set(array)]",
        options: [
            "[...new Set(array)]",
            "array.unique()",
            "removeDuplicates()",
            "cleanArray()"
        ],
        hints: ["Uses Set", "Spread syntax"]
    },
    {
        questionId: 19,
        question: "How do you write a comment in JavaScript?",
        answer: "// comment",
        options: ["// comment", "<!-- comment -->", "# comment", "/* comment */"],
        hints: ["Same as C++ style", "Double slash"]
    },
    {
        questionId: 20,
        question: "Which method is used to fetch data from an API?",
        answer: "fetch()",
        options: ["fetch()", "get()", "request()", "callAPI()"],
        hints: ["Built-in browser API", "Returns a Promise"]
    }
];

const questions: {
    list: {
        lebal: string,
        data: QuestionTypes[];
    }[]
} = {
    list: [
        {
            lebal:
                "HTML | Bigenner Level Quiz Test",
            data: htmlQuestions
        }, {
            lebal: "CSS | Modren Learner Level Test",
            data: cssQuestions
        }, {
            lebal:
                "JavaScript | Basic Level Course Test",
            data: javascriptQuestions
        }
    ]
}

export {
    htmlQuestions,
    cssQuestions,
    javascriptQuestions,
    questions
}