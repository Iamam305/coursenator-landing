

export const SearchFilter = async(input) =>{

    const res = await fetch('https://script.googleusercontent.com/macros/echo?user_content_key=1cRqyYAaAlfqoRr-_OUFFNUafOP0qPzYQXk8HozYpN21784r-v-sxl4DQp_yd0Garywnw9bcdr67ucSElgn2mNHy-wnc-oLhm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnA4wB4arB-moFPhlKq_qdix9ZIO-dAX5_umkb6QwBFJq5wsuTYW7D68RofIlyLhj4UdhuDTJg0vWjUDB8fYG9nwhaVT_Jpkqjdz9Jw9Md8uu&lib=Mnwh6OFQUhDgWD0SPqTeEpmh-ZI_Kd6al')

    const json = await res.json()

    const data = await json.data
    
    return await data.filter((course) => {
        if (input.length >0 ) {
            return course.name.toLowerCase().includes(input.toLowerCase())
            
        } 
        
    })
}


export const debounce = (func, wait) => {
    let timeout;
  
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
  
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  };