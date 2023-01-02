(function() {
    if(document.URL.toLowerCase().includes("scholarshipuniverse.com"))
    {
        let saveContainers = document.getElementsByTagName("block-ui-content");
        for(i = 0; i < saveContainers.length; i++)
        {
            saveContainers[i].remove();
        }
    }
})();