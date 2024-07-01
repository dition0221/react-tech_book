interface IProps {
  name: string;
  children: React.ReactNode;
  favNum: number;
}

function MyComponent({ name, children, favNum }: IProps) {
  return (
    <div>
      ㅎㅇ 내 이름은 `{name}` 입니다. <br />
      Children 값은 `{children}` 입니다. <br />
      숫자는 {favNum} 입니다.
    </div>
  );
}

MyComponent.defaultProps = {
  name: "기본 이름",
};

export default MyComponent;
