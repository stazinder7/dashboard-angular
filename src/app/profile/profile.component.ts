import { Component, OnInit } from '@angular/core';
declare var jQuery: any;
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() { }
  userPosts: any;
  user: any;
  gallery: any;
  personalInfo: any;

  ngOnInit() {
    this.user = {
      name: 'TJ',
      profilePic: 'https://pixinvent.com/materialize-material-design-admin-template/app-assets/images/user/12.jpg',
      designation: 'Senior Designer'
    }
    this.userPosts = [
      {
        content: `Lore is an American horror anthology television series developed by the creator of the podcast of
      the same name, Aaron Mahnke, with Valhalla Entertainment ...`,

        imageUrl: '',
        comments: [
          {
            userName: 'Rose',
            commentText: `Lore is an American horror anthology television series developed by the creator of the podcast of the same name, Aaron Mahnke, with Valhalla Entertainment ...`
          },
          {
            userName: 'Rose',
            commentText: `Lore is an American horror anthology television series developed by the creator of the podcast of the same name, Aaron Mahnke, with Valhalla Entertainment ...`
          },
          {
            userName: 'Rose',
            commentText: `Lore is an American horror anthology television series developed by the creator of the podcast of the same name, Aaron Mahnke, with Valhalla Entertainment ...`
          }
        ],
        likedBy: ['Rose', 'TJ']
      },
      {
        content: `Lore is an American horror anthology television series developed by the creator of the podcast of
      the same name, Aaron Mahnke, with Valhalla Entertainment ...`,
        imageUrl: '',
        comments: [
          {
            userName: 'Rose',
            commentText: `Lore is an American horror anthology television series developed by the creator of the podcast of the same name, Aaron Mahnke, with Valhalla Entertainment ...`
          }
        ],
        likedBy: ['Rose', 'TJ', 'Rose1', 'TJ1', 'TJ2', 'Rose2', 'TJ3', 'TJ4', 'Rose3', 'TJ5', 'TJ6', 'Rose4', 'TJ7']
      },
      {
        content: `Lore is an American horror anthology television series developed by the creator of the podcast of
      the same name, Aaron Mahnke, with Valhalla Entertainment ...`,
        imageUrl: '',
        comments: [
          {
            userName: 'Rose',
            commentText: `Lore is an American horror anthology television series developed by the creator of the podcast of the same name, Aaron Mahnke, with Valhalla Entertainment ...`
          }
        ],
        likedBy: []
      }
    ]
    this.gallery = [
      { imagepath: 'https://pixinvent.com/materialize-material-design-admin-template/app-assets/images/gallery/35.png', imageText: "Text1" },
      { imagepath: 'https://pixinvent.com/materialize-material-design-admin-template/app-assets/images/gallery/36.png', imageText: "Text2" },
      { imagepath: 'https://pixinvent.com/materialize-material-design-admin-template/app-assets/images/gallery/37.png', imageText: "Text3" },
      { imagepath: 'https://pixinvent.com/materialize-material-design-admin-template/app-assets/images/gallery/35.png', imageText: "Text4" },
      { imagepath: 'https://pixinvent.com/materialize-material-design-admin-template/app-assets/images/gallery/36.png', imageText: "Text5" }

    ]
    this.personalInfo = [
      {label:'Full Name', Value : 'Elizabeth Dyer'},
      {label:'Location', Value : 'USA'},
      {label:'Qualification', Value : 'MBA'},
      {label:'Designation', Value : 'Manager'},
      {label:'Languages', Value : 'English,German,Spanish'}
    ]
  }



  clickEventHandler(index) {
    jQuery('.favorite_border' + index).toggleClass('active');

  }

  openCommentSection(index) {
    jQuery('.commentSection' + index).slideToggle();
  }

  clickAddComments(txt, array) {
    console.log(txt)
    array.push({
      userName: 'Rose',
      commentText: txt

    })
  }

}
