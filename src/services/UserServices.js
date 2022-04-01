import configuration from "./../configuration/configuration.js"
import AxiosService from "./AxiosServices.js";

const axiosService = new AxiosService();

export default class UserServices {

    //Post
    CreateNote(data){
        var Url = configuration.CreateNote;
        return axiosService.post(Url, data, false);
    }

    //Patch
    UpdateNote(data){
        var Url = configuration.UpdateNote;
        return axiosService.patch(Url, data, false);
    }

    //Put
    TrashNote(data){
        var Url = configuration.TrashNote;
        return axiosService.put(Url, data, false);
    }

    //Put
    ArchiveNote(data){
        var Url = configuration.ArchiveNote;
        return axiosService.put(Url, data, false);
    }

    //put
    ChangeNoteColor(data){
        var Url = configuration.ChangeNoteColor;
        return axiosService.put(Url, data, false);
    }

    //Get
    GetNote(){
        var Url = configuration.GetNote;
        return axiosService.get(Url, false);
    }

    //Get
    GetReminderNote(){
        var Url = configuration.GetReminderNote;
        return axiosService.get(Url, false);
    }

    //Get
    GetTrashNote(){
        var Url = configuration.GetTrashNote;
        return axiosService.get(Url, false);
    }

    //Get
    GetArchiveNote(){
        var Url = configuration.GetArchiveNote;
        return axiosService.get(Url, false);
    }

}

