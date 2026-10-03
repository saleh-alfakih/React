// Here { items, category } destructures the single
// props object right in the parameter list,

function List({
    category = "none",
    items = [{ id: 0, name: "", calories: 0 }]
}
) {
    if(items.length === 1) return null
//   if (isListEmpty(props)) return null;
//   let { category, items } = props;

  //   items.sort((a, b) => a.name.localeCompare(b.name));
  //   items.sort((b, a) => a.name.localeCompare(b.name));
  items.sort((a, b) => a.calories - b.calories); // Numeric
  //   items.sort((a, b) => a.calories - b.calories); // Numeric descending order

  items = items.filter((item) => item.calories < 100);

  const listForitems = items.map((item) => {
    return (
      <li className="list-item" key={item.id}>
        <span className="list-item-name">{item.name}: </span>
        <span className="list-item-calories">{item.calories}</span>
      </li>
    );
  });


  return (
    <div className="list-container">
      <h2 className="list-category">{category}</h2>
      {items.length > 1 && <ul>{listForitems}</ul>} 
      {/* true/false && true (always because it exist) */}
    </div>
  );
}
function isListEmpty(props) {
  return !props.items;
}

export default List;
