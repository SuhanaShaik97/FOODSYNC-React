const adminSession = requireRole("admin");
document.getElementById("adminName").textContent = adminSession.name;
function safe(value){return escapeHtml(value==null?"—":String(value))}
function renderAdmin(){
  const users=DB.getUsers(), menu=DB.getMenu(), orders=DB.getOrders(), restaurants=DB.getRestaurants();
  document.getElementById("totalUsers").textContent=users.length;
  document.getElementById("totalRestaurants").textContent=restaurants.length;
  document.getElementById("totalOrders").textContent=orders.length;
  document.getElementById("deliveredOrders").textContent=orders.filter(o=>o.status==="Delivered").length;
  document.getElementById("usersBody").innerHTML=users.map(u=>`<tr><td>${safe(u.name)}</td><td>${safe(u.email)}</td><td>${safe(u.role)}</td><td>${safe(u.restaurant||"—")}</td></tr>`).join("")||'<tr><td colspan="4">No users yet.</td></tr>';
  document.getElementById("restaurantsBody").innerHTML=restaurants.map(r=>{const manager=users.find(u=>u.role==="manager"&&u.restaurant===r);return `<tr><td>${safe(r)}</td><td>${menu.filter(i=>i.restaurant===r).length}</td><td>${safe(manager?.name||"Not assigned")}</td></tr>`}).join("")||'<tr><td colspan="3">No restaurants yet.</td></tr>';
  document.getElementById("ordersBody").innerHTML=orders.map(o=>`<tr><td>#${safe(String(o.id||"").slice(-5))}</td><td>${safe(o.customerName)}</td><td>${safe(o.restaurant)}</td><td>₹${Number(o.total||0).toLocaleString("en-IN")}</td><td>${safe(o.status)}</td></tr>`).join("")||'<tr><td colspan="5">No orders yet.</td></tr>';
}
renderAdmin();
