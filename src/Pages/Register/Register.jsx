export const Register = () => {

    const [input, setInput] = useState('')
    const handleInputChange = (e) => setInput(e.target.value) 
    const isError = input === ''
  
    return (
        <>


        <FormControl isInvalid={isError}>
           <FormLabel>Email</FormLabel>
            <Input
              type='email'
              value={input}
              onChange={handleInputChange}
            />


           <FormLabel>Email</FormLabel>
           <Input
              type='email'
              value={input}
              onChange={handleInputChange}
            />


           <FormLabel>Email</FormLabel>
           <Input
              type='email'
              value={input}
              onChange={handleInputChange}
            />


           <FormLabel>Email</FormLabel>
           <Input
              type='email'
              value={input}
              onChange={handleInputChange}
            />


           <FormLabel>Email</FormLabel>

            <Input
              type='email'
              value={input}
              onChange={handleInputChange}
            />

               
        </FormControl>


      </>
    )
}