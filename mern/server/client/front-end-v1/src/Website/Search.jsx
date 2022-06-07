const Search = () => {
    return ( 


        <>
            

            <form>
                <label for="surname"> Enter Last Name: </label> 
                <input type="text" id="surname" placeholder="Search...">  </input>
                <button type="button"> Submit</button>
                 
            </form>

            <form>
                <label for="dob"> Date of Birth: </label>
                <input type="date" id="dob" placeholder="Search...">  
                </input>
                <button type="button"> Submit</button>

            </form>
        
        
        </>


     );
}
 
export default Search;