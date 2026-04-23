async function addCategory() {
    const name = document.getElementById("catName").value;
  
    const { error } = await supabaseClient
      .from("categories")
      .insert([{ name }]);
  
    if (error) {
      alert(error.message);
    } else {
      alert("Category added!");
      loadCategories();
    }
  }
  
  // LOAD FOR BOTH LIST + DROPDOWN
  async function loadCategories() {
    const { data } = await supabaseClient.from("categories").select("*");
  
    // LIST
    const list = document.getElementById("catList");
    if (list) {
      list.innerHTML = "";
      data.forEach(c => {
        list.innerHTML += `
          <li>
            ${c.name}
            <button onclick="deleteCategory('${c.id}')">Delete</button>
          </li>
        `;
      });
    }
  
    // DROPDOWN
    const dropdown = document.getElementById("category");
    if (dropdown) {
      dropdown.innerHTML = "";
      data.forEach(c => {
        dropdown.innerHTML += `
          <option value="${c.id}">${c.name}</option>
        `;
      });
    }
  }
  
  // DELETE CATEGORY
  async function deleteCategory(id) {
    await supabaseClient.from("categories").delete().eq("id", id);
    loadCategories();
  }
  
  // INIT PAGE (IMPORTANT)
  async function initPage() {
    await loadCategories();
  }
