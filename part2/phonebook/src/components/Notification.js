const Notification = ({ message, type }) => {
    if (message === null)
        return null

    return (
        <p className={type !== 'error' ? 'message-normal' : 'message-error'}>
            {message}
        </p>
    );
}

export default Notification;