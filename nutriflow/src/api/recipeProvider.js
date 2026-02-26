export async function GetApi(){
   try {
     const response = await fetch("https://dummyjson.com/recipes");
    const data = await response.json();
    const recipes =data.recipes
    return recipes
   } catch (error) {
    console.log(error);
    
    return []
   }
}
// GetApi();