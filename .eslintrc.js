module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        'indent': ['error', 4],
        'linebreak-style': ['error', 'unix'],
        'semi': ['error', 'always'],
        'operator-linebreak': ['error', 'after'],
        'class-methods-use-this': 0, // 允许非生命周期函数内不使用this
        'func-names': 0, // 必须有方法名
        'comma-dangle': 0, // 允许对象字面量项尾有逗号
        'consistent-return': 0, // 允许在方法末尾前使用 return
        'max-len': 0, // 一行最大长度
        'no-console': 0, // 允许使用 console
        'no-plusplus': 0, // 允许自加
        'no-param-reassign': 0, // 允许参数重定义
        'no-unused-vars': 0,
        'jsx-a11y/label-has-associated-control': 0,
        'jsx-a11y/label-has-for': 0,
        'jsx-a11y/img-has-alt': 0,
        'jsx-a11y/alt-text': 0,
        'jsx-a11y/click-events-have-key-events': 0, // 不要求onClick伴随着onKeyUp/onKeyDown/onKeyPress
        'jsx-a11y/no-noninteractive-element-interactions': 0, //允许非交互式元素支持事件处理程序
        'jsx-a11y/no-static-element-interactions': 0, // 允许没有语义行为的DOM元素带有交互处理程序
        'react/jsx-indent-props': ['error', 4], // jsx的属性缩进不为4个空格时进行报错
        'react/forbid-prop-types': ['error', { forbid: ['any'] }], // 当propTypes类型为any时，进行报错
        'react/no-multi-comp': 0,    // 允许一个jsx文件中包含多个component
        'react/jsx-filename-extension': 0, // 不仅仅允许后缀为jsx的文件使用jsx语法
        'react/jsx-indent': ['error', 4], // jsx的缩进不为4个空格时进行报错
        'linebreak-style': 0, // 关闭对行尾换行符的检测
        // "react-hooks/rules-of-hooks": "error", // 检查 Hook 的规则
        // "react-hooks/exhaustive-deps": "warn" // 检查 effect 的依赖
    }
};