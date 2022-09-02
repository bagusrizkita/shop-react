function Button(props, className, children) {
    <button type={props.type} class={`${className ? className : 'text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700  dark:focus:ring-blue-800'} focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none`}> {children}</button >
}
export default Button;