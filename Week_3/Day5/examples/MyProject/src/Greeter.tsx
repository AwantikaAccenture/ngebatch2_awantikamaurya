
interface NewGreeterProps{
  message :string;
}
export default function Greeter(props:NewGreeterProps): JSX.Element{


  return  <h2>Welcome to the {props.message}</h2>
}