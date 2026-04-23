async function addProduct() {
    const name = document.getElementById("name").value;
    const price = document.getElementById("price").value;
    const quantity = document.getElementById("quantity").value;
    const category_id = document.getElementById("category").value;
  
    const { error } = await supabaseClient.from("products").insert([
      {
        name,
        price: Number(price),
        quantity: Number(quantity),
        category_id
      }
    ]);
  
    if (error) {
      alert(error.message);
    } else {
      alert("Product added!");
      loadProducts();
    }
  }
  
  // LOAD PRODUCTS
  async function loadProducts() {
    const { data } = await supabaseClient
      .from("products")
      .select("*, categories(name)");
  
    const table = document.getElementById("tableBody");
    table.innerHTML = "";
  
    data.forEach(p => {
      table.innerHTML += `
        <tr>
          <td>${p.name}</td>
          <td>${p.price}</td>
          <td>${p.quantity ?? 0}</td>
          <td>${p.categories?.name || "-"}</td>
          <td>
            <button onclick="editProduct('${p.id}')">Edit</button>
            <button onclick="deleteProduct('${p.id}')">Delete</button>
          </td>
        </tr>
      `;
    });
  }
  
  // DELETE PRODUCT
  async function deleteProduct(id) {
    await supabaseClient.from("products").delete().eq("id", id);
    loadProducts();
  }
  
  // EDIT FLOW
  function editProduct(id) {
    localStorage.setItem("edit_id", id);
    window.location.href = "edit-product.html";
  }
  
  // LOAD DATA INTO EDIT PAGE
  async function loadEditData() {
    const id = localStorage.getItem("edit_id");
  
    const { data } = await supabaseClient
      .from("products")
      .select("*")
      .eq("id", id)
      .single();
  
    document.getElementById("name").value = data.name;
    document.getElementById("price").value = data.price;
    document.getElementById("quantity").value = data.quantity;
  }
  
  // UPDATE PRODUCT
  async function updateProduct() {
    const id = localStorage.getItem("edit_id");
  
    const name = document.getElementById("name").value;
    const price = document.getElementById("price").value;
    const quantity = document.getElementById("quantity").value;
  
    await supabaseClient
      .from("products")
      .update({
        name,
        price: Number(price),
        quantity: Number(quantity)
      })
      .eq("id", id);
  
    alert("Updated!");
    window.location.href = "view-products.html";
  }