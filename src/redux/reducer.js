// reducer.js
const initialState = {
    imageUrls: ['https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg', 
    'https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D', 
    'https://lh3.googleusercontent.com/proxy/IJQnMzoFp6YIvKHBbWT2LlV7amoZuXcwWZdJ30unOfbNUwvmYE9-7K3p2xmNSkOnVVSaZKlJDlBXp7l_HeoK3snSCheFpJ0jzUFQTKlW6dYc-LPJYNR1HoH6t6SXnO09a98Q_W46msM5SCL-A6A', 
    
    'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-james-wheeler-414612.jpg&fm=jpg',
     'https://www.seiu1000.org/sites/main/files/main-images/camera_lense_0.jpeg'],
    currentImage: 0,
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'NEXT_IMAGE':
        return {
          ...state,
          currentImage: (state.currentImage + 1) % state.imageUrls.length,
        };
      case 'PREV_IMAGE':
        return {
          ...state,
          currentImage: (state.currentImage - 1 + state.imageUrls.length) % state.imageUrls.length,
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  