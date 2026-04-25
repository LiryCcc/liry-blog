# react各版本差别

## react 16 -> 16.8

引入fiber、hooks和函数组件

之前都是类组件

## 17

1. 引入新的react jsx runtime

之前jsx是`React.createElement`

```ts
import React from 'React';
```

之后是`jsx-runtime`

```ts
import { jsx } from 'react/jsx-runtime';

jsx('div', {
  props1: 1
});
```

## 18

引入了concurrent feature，在react-dom渲染器上最先启用，react-native较晚

主要是引入了优先级概念，并增加了一些低优先级相关的api和hooks

### 新hooks

1. useDeferredValue

包装一个state，来让该state对应的ui延迟更新

2. useTransition

用来调度低优先级更新

3. useSyncExternalStore

用于和外部同步更新状态

4. useId

用于在ssr场景下在客户端和服务端生成相同的id

### react-dom 新api

并发模式通过新的api来启用

```tsx
import { createRoot } from 'react-dom';

const rootDiv = document.createElement('div');
const App = () => {
  return (
    <div>
      <span>{'hello concurrent feature'}</span>
    </div>
  );
};
createRoot(rootDiv).render(<App />);
document.body.appendChild(rootDiv);
```

## 19

react19的更新引入了actions、新hooks和api和react compiler

### react compiler

react compiler作为一个babel插件提供，编译时自动添加useMemo memo useCallback等，并与react/compiler-runtime结合进行优化

从而无需手动优化

### 新hooks

1. useActionState

绑定action，自动返回`[state, action, isPending]`

2. useOptimistic乐观更新，请求中立即展示预期效果，失败自动回滚

简化了原有的乐观更新的实现

3. useFormStatus 子组件直接获取表单的pending/submitted状态，无需透传props

4. useEffectEvent 分离副作用中的时间逻辑，不触发rerender， 解决闭包陷阱

### api更新

1. use 是一个api而不是hook，可以配合Suspense组件直接使用异步资源，把异步变为同步

2. ref可以直接作为prop

react18中需要用forwardRef包裹，19直接传ref

```tsx
const Input = ({ ref }: { ref: RefObject<HTMLInputElement> }) => {
  return <input ref={ref} />;
};
```

3. Context简写

<Context>直接替代<Context.Provider>功能一致

```tsx
const ThemeContext = createContext('light');
// React 19
<ThemeContext value='dark'>{children}</ThemeContext>;
```
