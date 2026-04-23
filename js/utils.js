async function loadStats() {
    const { data: p } = await supabaseClient.from("products").select("*");
    const { data: c } = await supabaseClient.from("categories").select("*");
  
    document.getElementById("totalProducts").innerText = p?.length || 0;
    document.getElementById("totalCategories").innerText = c?.length || 0;
  }