function Items({itemsApiData}) {

    const generatedItemsFromAPI = itemsApiData.map((itemAPI, index) => {
        return (<div className="bg-purple-400 text-neutral-900 font-bold p-3 rounded m-2 w-1/4 h-1/3 text-center" key={index}>{itemAPI}</div>);
    })

    return (
        <div className="h-full bg-grey-600 flex flex-row flex-wrap justify-center ">
            {generatedItemsFromAPI}
        </div>
  )
}

export default Items;
