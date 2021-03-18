import FormattedMessage from "./FormattedMessage"
import StringifyJson from "./StringifyJSON"

const ErrorMessage = ({error, fullError} ) =>{
    return (
        <FormattedMessage type='alert'>
          {fullError && <StringifyJson json={error.message}/>}
          {/* TODO: this only works if there is a message key on error
          so down down the road we might need to more here */}
          {!fullError && <pre>{error.message}</pre>}
        </FormattedMessage>
    )
}

export default ErrorMessage