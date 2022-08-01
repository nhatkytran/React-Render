React Render

Two phases: Render phase (Slow) and Commit phase (Fast)

# useState & useReducer

The same value

- After the initial render => No re-render happens
- After re-renders => Re-render one more time and then stop re-render

# Becareful when using state with reference value

# Parent and Child

- Parent re-renders, all childs re-render recursively

The same state

- After the initial render => No re-render happens
- After re-renders => Parent re-renders one more time and child never re-renders

# Same element reference

    <Parent>
      <Child />
    </Parent>

    <div>{children}</div>

Parent re-renders because of state's changes

=> Now child is treated as props
=> Components can change its state but not props

Parent re-renders because of props

=> Child re-renders always

/// Notice: Can not pass props as children

# React memo

=> Have the same result as you use the props technique, but now you can pass props to children

=> The props technique is actually called the same reference technique

/// Notice: Don't have to use React.memo if you Child has children element
/// or has time function

/// Reference props cause re-render => useMemo and useCallback come into play
