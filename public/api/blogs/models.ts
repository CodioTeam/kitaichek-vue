
export interface Blog {
  id: string;
  author: string;  // User ID
  createdAt: Date;
  title: string;
  content: string;  // WYSIWYG content with HTML markup
}
