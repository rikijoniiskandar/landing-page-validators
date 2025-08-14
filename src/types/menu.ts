export type SubmenuItem = {
    label: string;
    href: string;
    target?: string
  };    
  
  export type HeaderItem = {
    label: string;
    href: string;
    target?: string;
    submenu?: SubmenuItem[];
  };