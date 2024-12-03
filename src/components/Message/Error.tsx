interface ErrorProps {
  title: string;
  subTitle: string;
  msg: string;
}

function Error({ title, subTitle, msg }: ErrorProps) {
  return (
    <article className="message is-danger section">
      <div className="message-header">
        <p>{title}</p>
      </div>
      <div className="message-body">
        <strong className="font-bold">{subTitle}: </strong>
        <span className="block sm:inline">{msg}</span>
        <span className="block sm:inline mt-2">
          If the problem persists, feel free to contact our support team for assistance.
        </span>
      </div>
    </article>
  );
}

export default Error;
