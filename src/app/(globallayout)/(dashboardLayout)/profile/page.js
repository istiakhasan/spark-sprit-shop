"use client";
import { useGetPrifileInfoQuery,useUpdateProfileMutation } from "@/redux/api/profile";
import "./profile.css";
import moment from "moment";
import { Avatar } from "@mui/material";
import MuiCommonIcon from "@/components/ui/MuiCommonIcon";
const Profile = () => {
  const { data } = useGetPrifileInfoQuery(undefined,{
    refetchOnMountOrArgChange:true,
    refetchOnFocus:true,
    refetchOnReconnect:true
  });
  const [updateProfileImage]=useUpdateProfileMutation()
  const profileData = data?.data

  const uploadProfilePicture=(file)=>{
    const apiKey='ee3fd83f55e650edf800161db386836a' 
    const url=`https://api.imgbb.com/1/upload?key=${apiKey}` 
    const formData=new FormData()
    formData.append('image',file[0]) 
    fetch(url,{
      method:"POST",
      body:formData
    })
    .then(res=>res.json())
    .then(async data=>{
      const uploadedImage=data?.data?.url 
      if(uploadedImage){
          const res=await updateProfileImage({image:uploadedImage})
      }
      //  copyData["image"]=data?.data?.url  
      //  const res=await  createProduct(copyData).unwrap() 
      //  setLoading(true)
      //  toast.success('Product created successfully 🙌')
      //  setOpen(false)
    })
    .catch(err=>{
      // setLoading(true)
    })
  }
  return (
    <div>
      <h5> My Profile </h5>
      <div className="db_common_body">
        <div className="row">
          <div className="col-md-12 mb-5">
            <div className="profile_img_wrapper"> 
          <Avatar
                            variant="square"
                            alt="Remy Sharp"
                            src={profileData?.image}
                            sx={{
                              width: "100%",
                              height: "100%",
                              border: "1px solid white",
                              padding: "1px",
                              borderRadius:"50%"
                            }}
                          />
                    <label htmlfor="up" className="upload_icon"> <MuiCommonIcon size="small" color="white" name="pen" />
                    
                    <input onChange={(e)=>uploadProfilePicture(e.target.files)} id="up" type="file" className="d-none" />
                     </label>    
                     </div>
          </div>
          <div className="col-md-4 mb-5">
            <div class="my-profile-item">
              <h3 class="my-profile-item-title">Full name</h3>
              <div class="my-profile-item-info">{profileData?.name}</div>
            </div>
          </div>
          <div className="col-md-4 mb-5">
            <div class="my-profile-item">
              <h3 class="my-profile-item-title">
                <span>Email Address</span> <span class="gray">|</span>{" "}
                <a data-spm="demail_change">Change</a>
              </h3>
              <div class="my-profile-item-info">{profileData?.email}</div>
            </div>
          </div>
          <div className="col-md-4 mb-5">
            <div class="my-profile-item"><h3 class="my-profile-item-title">Mobile <span class="gray">|</span> <a data-spm="dmobile_add">Add</a></h3><div class="my-profile-item-info"><span class="gray">{ profileData?.phone}</span></div></div>
          </div>
          <div className="col-md-4 mb-5">
            <div class="my-profile-item">
              <h3 class="my-profile-item-title">Birth Day</h3>
              <div class="my-profile-item-info">{ moment(profileData?.date_of_birth).format('DD MMMM YYYY  ')}</div>
            </div>
          </div>
          <div className="col-md-4 mb-5">
            <div class="my-profile-item">
              <h3 class="my-profile-item-title">Gender</h3>
              <div class="my-profile-item-info">{ profileData?.gender || "--"}</div>
            </div>
          </div>
          <div className="col-md-4 mb-5">
            <div class="my-profile-item">
              <h3 class="my-profile-item-title">Country</h3>
              <div class="my-profile-item-info">{ profileData?.country?.label}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
