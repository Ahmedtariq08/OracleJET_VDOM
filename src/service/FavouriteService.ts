import RestUtil from "../utils/rest/RestUtil";

export default class FavouriteService {

    constructor() { }

    public addToFavourites = async (url: string, body: Object) => {

        var response = await RestUtil.postWithTextResponse(url, body);
        if (response == "Favourite added!")
            return true;
        return false;
    }

    public removeFromFavourites = async (url: string, body: Object) => {
        var response = await RestUtil.deleteWithTextResponse(url, body);
        if (response == "Favourite deleted!")
            return true;
        return false;
      
    }

}