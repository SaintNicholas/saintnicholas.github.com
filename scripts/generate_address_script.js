function generate_address( username, hostname ) {
        var domain = "nickgoote.com";
        var atsign = "&#64;";
        var addr = username + atsign + hostname + domain;
        document.write( 
          "<" + "a" + " " + "href=" + "mail" + "to:" + addr + ">" +
          addr +
          "<\/a>");
      }
