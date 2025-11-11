export default function ErrorFallback({ name, message }) {
  return (
    <div>
      <p>{name}</p>
      <p>{message}</p>
    </div>
  );
}
