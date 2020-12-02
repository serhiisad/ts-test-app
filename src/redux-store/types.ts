

export  type State = {
  posts: Array<Post>
}

export interface Action {
  type: string;
  // payload: Post | number | Array<Post>;
  payload: any;
  // [propName: string]: any // ?? for modification
}

export type Post = {
  id: number;
  title: string;
  content: string;
};

// export Post;