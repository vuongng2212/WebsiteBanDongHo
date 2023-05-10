window.addEventListener("load",()=>{
    let imgIntro = document.querySelector("#img-intro-products");
    console.log(imgIntro);
    let textA = document.querySelector(".hover01");
    console.log(textA);

    //Product theo giới tính
    let genderArr = [
        {
            gender:`NAM`,
            disc:`“Cùng với sự phát triển không ngừng của thời trang thế giới, rất nhiều thương hiệu cho ra đời những mẫu đồng hồ nam chính hãng đa dạng về phong cách, kiểu dáng, màu sắc, kích cỡ… Một chiếc đồng hồ nam cao cấp chính hãng khắc họa một giá trị đích thực khi nói đến phụ kiện xa xỉ dành cho phái mạnh. Hiện nay, đồng hồ là phụ kiện thời trang thiết yếu đối với những người đàn ông hiện đại. Trên cổ tay của những người đàn ông thành đạt luôn dành vị trí cho một chiếc đồng hồ nam đẹp cao cấp.”`,
            banner:`./product-img/banner-brands/dong-ho-nam-banner.webp`
        },
        {
            gender:`NỮ`,
            disc:`“Phụ nữ luôn có những yêu cầu cao về phong cách trang phục, phụ kiện bên ngoài của họ. Đặc biệt khi nói về đồng hồ nữ cao cấp thì phái đẹp luôn yêu cầu phải có sự hài hòa về kiểu dáng, màu sắc, sự khéo léo và đặc biệt phải có độ chính xác cao, chất lượng tốt. Đối với những phụ nữ hiện đại thì một chiếc đồng hồ nữ chính hãng không thể thiếu trên cổ tayọ, không chỉ đơn giản là để xem giờ mà nhằm tôn vinh vẻ đẹp của họ mà thôi. “`,
            banner:`./product-img/banner-brands/dong-ho-nu-banner.webp`
        }
    ]

    
    let brandsArr = [
        {
            brand:'CASIO',
            acronym:'CASIO',
            disc:'Đồng hồ Casio được biết đến là thương hiệu đồng hồ lâu đời trong ngành công nghiệp đồng hồ tại Nhật Bản. Những mẫu đồng hồ Casio nam và đồng hồ Casio nữ được yêu thích bởi thiết kế đơn giản, dễ dàng để xem giờ, được trang bị đầy đủ các công nghệ mới nhất và có giá bán cực kỳ rẻ. Ngoài ra, đồng hồ Casio chính hãng còn nổi bật với chức năng đa dạng giúp ích cho người dùng vào những hoạt động đời sống thường ngày. Hãy lựa chọn ngay những mẫu đồng hồ Casio nam, nữ, unisex, đôi/cặp, trẻ em chính hãng bạn yêu thích nhất tại Đồng Hồ Hải Triều nhé!',
            small_logo:'./product-img/img-logo-products/CASIO.webp',
            banner:'./product-img/banner-brands/banner-Casio.webp'
        },
        {
            brand:'G-SHOCK',
            acronym:'G-shock',
            disc:'Đồng hồ G-Shock chính hãng nam, nữ là sự kết hợp giữa thể thao và thời trang. Mỗi một chiếc đồng hồ Casio G-Shock đến tay khách hàng đều trải qua quá trình kiểm định nghiêm ngặt. Với G-Shock, bạn còn trải nghiệm hàng loạt tính năng như chống sốc (Protection,), chống nước (Resist), chống bùn lầy, đo độ cao, nhiệt độ,… nhờ những công nghệ tiên tiến. Tại Việt Nam, Casio G-Shock thu hút được đông đảo giới trẻ nam, nữ, cặp đôi, trẻ em cho bé trai sử dụng. Casio G-Shock sẽ có nhiều tùy chọn về dây (dây kim loại, dây da), màu sắc (xanh, trắng, hồng, đỏ, đen, vàng, trong suốt, quân đội…), phân khúc cao cấp, giá rẻ, mặt vuông đáng mua nhất cho bạn tùy chọn',
            small_logo:'./product-img/img-logo-products/GSHOCK-BABYG1.webp',
            banner:'./product-img/banner-brands/G-shock.webp'
        },
        {
            brand:'CITIZEN',
            acronym:'CITIZEN',
            disc:'Citizen – Thương hiệu đồng hồ được thành lập bởi các nhà đầu tư Nhật Bản và Thụy Sỹ vào năm 1918. Trụ sở chính của hãng được đặt tại Nhật Bản, bao gồm cả dây chuyền sản xuất bộ máy độc lập do tập đoàn nắm giữ. Thương hiệu trực tiếp lắp ráp 3 dòng sản phẩm là đồng hồ Citizen Automatic, Quartz và Eco-Drive. Tín đồ đánh giá đồng hồ Citizen nam, nữ có chất lượng tốt và đa dạng về chất liệu (dây da, kim loại, kính cứng, sapphire), nhiều kiểu dáng (mặt vuông, mặt tròn). Tại Việt Nam, Đồng Hồ Hải Triều là đại lý đồng hồ Citizen chính hãng ủy quyền. Khách hàng dễ dàng mua sắm đồng hồ đeo tay Citizen nam, nữ chính hãng mẫu mới, giá rẻ với đầy đủ bảng giá và chính sách bảo hành tốt nhất.',
            small_logo:'./product-img/img-logo-products/CITIZEN.webp',
            banner:'./product-img/banner-brands/banner-CITIZEN.webp'
        },
        {
            brand:'OLYM PIANUS - OLYMPIA STAR',
            acronym:'OLYM PIANUS',
            disc:'Được tạo nên từ những nghệ nhân đồng hồ chuyên nghiệp, thiết kế sang trọng mang nét đẹp cổ điển hòa quyện cùng phong cách thời trang hiện đại. Đồng hồ OP nam, nữ, cặp đôi chính hãng, giá trị đích thực đến từ thương hiệu nổi tiếng tại Nhật Bản… “OLYM PIANUS”..tên gọi đầy đủ của hãng.Olym Pianus tên gọi được hãng sử dụng cho những chiếc đồng hồ OP chính hãng được ráp máy tại Nhật Bản và đối với dòng đồng hồ OP được ráp tại Thụy Sĩ, họ gọi chúng là Olym Star.',
        small_logo:'./product-img/img-logo-products/OP1.webp',
        banner:'./product-img/banner-brands/banner-dong-ho-op-chinh-hang.webp'
        },
        {
            brand:'ORIENT',
            acronym:'ORIENT',
            disc:'Orient – Thương hiệu đồng hồ Nhật Bản thuộc Seiko Epson được thành lập vào năm 1950. Đồng hồ Orient chính hãng được chế tác từ vật liệu thượng hạng, bộ máy tiêu chuẩn cao cấp, độ hoàn thiện tinh xảo. Orient sở hữu tệp khách hàng rộng khắp nhờ thiết kế đa dạng trong dây đeo (dây da, kim loại), kiểu dáng (tròn, mặt vuông, chữ nhật), phong cách (Quartz, automatic, cơ tự động lộ máy), vật liệu (sapphire, kính cứng) hay màu sắc (đỏ, xanh, đen,…). Ở thời điểm hiện tại, những mẫu đồng hồ Orient nam, nữ, cặp đôi đẹp nhất còn được hỗ trợ tối đa bởi các chính sách về bảo hành, nhanh chóng cập nhật các mẫu mới, giá rẻ hàng hiệu từ đại lý',
            small_logo:'./product-img/img-logo-products/ORIENT1.webp',
            banner:'./product-img/banner-brands/banner-dong-ho-orient-chinh-hang.webp'
        },
        {
            brand:'SEIKO',
            acronym:'SEIKO',
            disc:'SEIKO, thương hiệu đồng hồ có bề dày lịch sử lâu đời nhất tại Nhật Bản. Với hơn 130 năm kinh nghiệm, hãng đồng hồ SEIKO sẽ đem đến cho bạn những trải nghiệm về sự Tinh Tế, Sang Trọng trong thiết kế cũng như chất lượng hoàn hảo đến từ sản phẩm đồng hồ SEIKO nam nữ, cặp đôi chính hãng. Bộ máy đồng hồ SEIKO được tạo nên dựa trên những tinh hoa công nghệ hàng đầu nước Nhật, cho sự “Ổn Định” cũng như độ “Chính Xác” cao trong từng chuyển động. Các dòng đồng hồ SEIKO nam nữ chính hãng mẫu mới, đẹp được quan tâm nhiều nhất hiện nay như: Seiko 5, Seiko Kinetic, Seiko Automatic.. vv',
            small_logo:'./product-img/img-logo-products/SEIKO.webp',
            banner:'./product-img/banner-brands/banner-seiko.webp'
        },
        {
            brand:'SKAGEN',
            acronym:'SKAGEN',
            disc:'Thiết kế sang trọng đầy lịch lãm mang vẻ đẹp dịu dàng của biển cả hòa quyện cùng nét đẹp hùng vĩ của núi non, được tạo nên từ những chất liệu hàng đầu cho sản phẩm đồng hồ SKAGEN chính hãng một chất lượng hoàn hảo. Đơn giản nhưng đầy tinh tế, những chiếc đồng hồ SKAGEN nam nữ không chỉ những hữu thiết kế sang trọng mà còn có mức giá bán hết sức “Cạnh Tranh”. Đó chính là lý do vì sao đồng hồ SKAGEN đã có mặt trên toàn Thế Giới và đang rất thịnh hành tại mọi quốc gia.',
            small_logo:'./product-img/img-logo-products/SKAGEN.webp',
            banner:'./product-img/banner-brands/dong-ho-skagen-nam-nu-chinh-hang.webp'
        },
        {
            brand:'FOSSIL',
            acronym:'FOSSIL',
            disc:'Fossil được biết đến là thương hiệu sản xuất quần áo và phụ kiện thời trang lớn nhất tại Mỹ hiện nay. Mảng chính của Fossil đó là sản xuất các loại đồng hồ hiệu với mẫu mã đa dạng và thời trang. Phong cách đồng hồ Fossil chính hãng là sự tiếp thu từ truyền thống cổ điển kết hợp với công nghệ hiện đại ngày nay. Nếu như đồng hồ Fossil nam thu hút khách hàng với sự tinh tế và nổi bật từ những mẫu đồng hồ dây da sang trọng. Thì đồng hồ Fossil nữ lại quyến rủ với những mẫu đồng hồ bằng kim loại mạ vàng đầy quý phái….',
            small_logo:'./product-img/img-logo-products/FOSSIL.webp',
            banner:'./product-img/banner-brands/dong-ho-fossil-nam-nu-chinh-hang.webp'
        },
        {
            brand:'ADRIATICA',
            acronym:'ADRIATICA',
            disc:'Nếu bạn đang tìm kiếm cho mình một mẫu đồng hồ Thụy Sĩ sang trong và có thể tạo nên điểm nhấn dành cho phong cách của bạn, thì một chiếc đồng hồ Adriatica chính hãng là lựa chọn thông minh và hoàn hảo nhất dành cho bạn. Đồng hồ Adriatica là mang thông điệp về tính chính xác, chất lượng, độ tin cậy, vẻ đẹp sang trọng và độc đáo….của thiết kế đồng hồ Thụy Sĩ.',
            small_logo:'./product-img/img-logo-products/ADRIATICA1.webp',
            banner:'./product-img/banner-brands/adritica-banner.webp'
        },
        {
            brand:'LONGINES',
            acronym:'LONGINES',
            disc:'Longines là nhà sản xuất lâu đời Thụy Sỹ, được thành lập vào năm 1832 tại thị trấn Saint-Imier (Thụy Sỹ) bởi Auguste Agassiz. Logo thương hiệu Longines gắn liền với hình ảnh đồng hồ cát có cánh, được đăng ký vào năm 1889 và không thay đổi cho tới thời điểm hiện tại. Longines chính thức là thành viên của tập đoàn Swatch Group vào năm 1983. Tất cả đồng hồ Longines chính hãng nam, nữ đều đạt chuẩn Swiss Made và vận hành bằng bộ máy ETA cao cấp.',   
            small_logo:'./product-img/img-logo-products/LONGINES1.webp',
            banner:'./product-img/banner-brands/banner-dong-ho-longines-chinh-hang-nam-nu.webp'
        },
        {
            brand:'BULOVA',
            acronym:'BULOVA',
            disc:'Đối với những người yêu thích phụ kiện thời trang chắc chắn đã từng nghe nói đến thương hiệu đồng hồ Bulova, một thương hiệu được hàng triệu khách hàng trên toàn thế giới yêu thích bởi vẻ đẹp cổ điển mang đậm phong cách Thụy Sỹ. Những mẫu đồng hồ Bulova chính hãng khắc họa nét đẹp “trang hoàng” trên cổ tay của các quý ông và quý bà sang trọng trong những sự kiện, tiệc tùng. Nếu như đồng hồ Bulova nam có sự pha trộn nét đẹp đặc trưng của các nước Đông Âu, thì những chiếc đồng hồ Bolova nữ lại cuốn hút bởi sự kết hợp phong cách thời trang Mỹ….',
            small_logo:'./product-img/img-logo-products/BULOVA1.webp',
            banner:'./product-img/banner-brands/banner-BULOVA.webp'
        },
        {
            brand:'CALVIN KLEIN (CK)',
            acronym:'CK',
            disc:'“Đồng hồ CalVin Klein là sự bổ sung tuyệt vời cho thị trường phụ kiện thời trang thế giới. Những mẫu đồng hồ CK chính hãng ra đời là sự kết hợp giữ chuyên môn thời trang đến từ Mỹ và bí quyết từ những người thợ đồng hồ Thụy Sỹ lừng danh để tạo nên phong cách đồng hồ hoàn toàn khác biệt. Phương châm thiết kế của đồng hồ CK là “Đơn giản tối đa – Độc đáo tối đa”, chính vì thế bạn có thể dễ kết hợp đồng hồ CalVin Klein với bất kỳ trang phục nào để tạo nên phong cách riêng dành cho bạn …. ”',
            small_logo :'./product-img/img-logo-products/CALVIN-KLEIN1.webp',
            banner:'./product-img/banner-brands/ck-banner.webp'
        },
        {
            brand:'CANDINO',
            acronym:'CANDINO',
            disc:'“Vẻ đẹp sang trọng đầy lịch lãm được tạo nên bởi đôi tay của những nghệ nhân đồng hồ chuyên nghiệp hàng đầu, theo đó một là quy trình sản xuất và kiểm tra chất lượng nghiêm ngặt theo chuẩn công nghệ Thụy Sỹ. Những chiếc đồng hồ CANDINO nam nữ chính hãng, không chỉ sang trọng về thiết kế mà còn hoàn hảo về chất lượng. “Swiss Made” dòng chữ được in trên tất cả sản phẩm đồng hồ CANDINO chính hãng, đó là biểu mẫu tượng trưng cho một chất lượng tuyệt hảo đối với những chiếc đồng hồ được sản xuất từ Thụy Sĩ”',
            small_logo:'./product-img/img-logo-products/CANDINO1.webp',
            banner:'./product-img/banner-brands/candino-banner.webp'
        },
        {
            brand:'MICHAEL KORS',
            acronym:'MICHAEL KORS',
            disc:'“Michael Kors – thương hiệu thời trang và phụ kiện cao cấp danh tiếng nhất tại Mỹ… gắn liền với các sản phẩm áo quần, túi xách giá trị lên đến hàng chục triệu đồng. Nhưng riêng với mặt hàng đồng hồ, Michael Kors mở bán ở mức giá chỉ từ 4.600.000 VNĐ cho cộng đồng đam mê. Vốn thừa hưởng phong cách thiết kế hiện đại theo xu hướng thời trang cùng bộ máy được tạo nên từ công nghệ Tiên Tiến, đồng hồ Michael Kors nam nữ chính hãng đã mang đến khả năng vận hành ổn định và chính xác dường như tuyệt đối. Đồng hồ Michael Kors nữ chính hãng hiện nay đang là xu hướng thời trang cao cấp HOT nhất đối với những cô gái yêu thích sự “Nổi Bật”… Đồng hồ MICHAEL KORS giá trị một thương hiệu…”',
            small_logo:'./product-img/img-logo-products/MICHAEL-KORS1.webp',
            banner:'./product-img/banner-brands/dong-ho-michael-kors-nam-nu-chinh-hang.webp'
        },
        {
            brand:'MOVADO',
            acronym:'MOVADO',
            disc:'“Nếu có một câu để nói về đồng hồ Movado đó chính là “nghệ thuật thời gian tuyệt vời”, mỗi sản phẩm đồng hồ Movado ra đời là một tác phẩm nghệ thuật có khả năng lưu truyền theo dòng lịch sử . Bất kỳ mẫu đồng hồ Movado nam hay đồng hồ Movado nữ điều được thiết kế mang hơi thở của sự cổ điển những vẫn toát lên được một phong cách đầy hiện đại, chính vì thế đồng hồ Movado chính hãng niền mơ ước của hàng triệu khách hàng trên toàn thế giới. Hãy lựa chọn ngay cho bạn mẫu đồng hồ Movado chính hãng để tạo nên vẻ đẹp hoàn hảo và đẳng cấp nhất dành cho bạn…..”',
            small_logo:'./product-img/img-logo-products/MOVADO1.webp',
            banner:'./product-img/banner-brands/banner-movado.webp'
        },
        {
            brand:'ROTARY',
            acronym:'ROTARY',
            disc:'“Trải qua hơn 120 năm lịch sử hình thành và phát triển, Rotary được biết là thương hiệu đồng hồ “tầm trung” nổi bật nhất của Thụy Sỹ với phong cách thiết kế có sự pha trộn “giữa cái cũ với cái mới” – “giữa cổ điển và hiện đại”, giá cả phải chăng . Ngoài ra, Rotary còn cam kết tất cả nguyên liệu để tạo nên một chiếc đồng hồ Rotary điều có xuất xứ từ Thụy Sĩ. Hiện nay, đồng hồ Rotary được bày bán hơn 35 quốc gia trên thế giới, Việt Nam là đất nước may mắn trong đó….”',
            small_logo:'./product-img/img-logo-products/ROTARY1.webp',
            banner:'./product-img/banner-brands/candino-banner (1).webp'
        },
        {
            brand:'TISSOT',
            acronym:'TISSOT',
            disc:'“Tissot là thương hiệu đồng hồ được thành lập vào năm 1853 bởi hai cha con Charles-Félicien Tissot và Charles-Émile Tissot tại thị trấn Le Locle (Thụy Sỹ). Năm 1998, Tissot chính thức trở thành thành viên của tập đoàn Swatch Group. Tất cả đồng hồ Tissot 1853 chính hãng nam, nữ, cặp đôi đều đạt chuẩn Swiss Made và có giá bán chỉ từ 5 triệu.”',
            small_logo:'./product-img/img-logo-products/TISSOT1.webp',
            banner:'./product-img/banner-brands/banner-DONG-HO-TISSOT.webp'
        },
        {
            brand:'DANIEL WELLINGTON',
            acronym:'DW',
            disc:'“Daniel Wellington – Thương hiệu đồng hồ được thành lập năm 2011 bởi nhà mốt người Thụy Điển là Filip Tysander. Vốn theo đuổi phong cách cổ điển trên đồng hồ, Filip Tysander trung thành với các kiểu dáng mặt tròn, dây da, vải hoặc dây lưới truyền thống. Tuy nhiên với sức sáng tạo và sự chuyển động không ngừng ngành thời trang, hãng đồng hồ DW bắt đầu cho ra mắt nhiều hơn ở dòng đồng hồ DW dây thép, kim loại, đính đá, khảm xà cừ, mặt vuông, máy cơ automatic… Các mẫu đồng hồ DW nam, nữ, cặp đôi ngày nay đã đẹp hơn rất nhiều. Mặc dù giá rẻ đến bình dân, nhưng chất lượng đồng hồ Daniel Wellington chính hãng được giới mộ điệu đánh giá cao.”',
            small_logo:'./product-img/img-logo-products/Daniel-Wellington-Logo3.webp',
            banner:'./product-img/banner-brands/banner-DW-thang-4.webp'
        },
        {
            brand:'OGIVAL',
            acronym:'OGIVAL',
            disc:'“Mỗi chiếc đồng hồ Ogival ra đời là cả một nghệ thuật và sự sáng tạo khắc họa lên đó, nó như một bức tranh ảo huyền với nhân vật chính là chú cá nhảy ban phước lành Ogival. Và cũng giống như nhiều thương hiệu khác của Thụy Sỹ, đồng hồ Ogival được sản xuất với quy trình chất lượng được kiểm tra nghiêm ngặt theo đúng tiêu chuẩn Thụy Sỹ. Trong những năm gần đây tại Việt Nam, đồng hồ Ogival chính hãng đang trở thành trào lưu mới và được những người đam mê đồng hồ “Swiss Made” săn lùng rất nhiều….”',
            small_logo:'./product-img/img-logo-products/logo-ogival-small.webp',
            banner:'./product-img/banner-brands/dong-ho-ogival-banner.webp'
        },
        {
            brand:'DOXA',
            acronym:'DOXA',
            disc:'“ Doxa là thương hiệu đồng hồ Thụy Sỹ lâu đời, có bề dày lịch sử hơn 130 năm. Với những dấn ấn thăng trầm, nhưng Doxa có quyền tự hào nói với thế giới rằng: “100% chi tiết đồng hồ Doxa được sản xuất tại Thụy Sỹ – SWISS MADE đúng nghĩa, hiện thân của chất lượng kỹ thuật và chất lượng thẩm mỹ mà không có bất kỳ sự trộn lẫn nào”. Đồng hồ Doxa được thế giới công nhận về mức độ hoàn thiện tuyệt hảo trong từng sản phẩm làm ra. Mỗi sản phẩm đều trải qua một quá trình kiểm tra nghiêm ngặt trước khi xuất xưởng.Tất cả, đồng hồ Doxa chính hãng đều vượt chỉ tiêu mà FHS đề ra khi được sản xuất thủ công 100% tại trung tâm của Thụy Sỹ, là sự kết hợp tinh hoa hàng trăm của nghề làm đồng hồ Thụy Sỹ để mang đến chất lượng hoàn hảo dành cho khách hàng”',
            small_logo:'./product-img/img-logo-products/logo-doxa-small (1).webp',
            banner:'./product-img/banner-brands/doxa-banner-dong-ho-kim-cuong.webp'
        }     
    ];






    //Chi tiết của sản phẩm
    let productDetail =[
        {
            code:`MTP-1370D-7A2VDF`,
            name:`CASIO MTP-1370D-7A2VDF – NAM – QUARTZ (PIN) – MẶT SỐ 40MM, KÍNH CỨNG, CHỐNG NƯỚC 5ATM
            `,
            intro:`Đồng hồ nam Casio MTP-1370D-7A2VDF thanh lịch với kiểu dáng nam tính mặt đồng hồ nền trắng cùng chữ số vạch mạ vàng, chất liệu được làm từ thép không gỉ, 3 kim vàng, còn có 1 lịch ngày và 1 lịch thứ.`,
            price:1607000,
            brand:`CASIO`,
            gender:`NAM`,
            img:`./product-img/img-for-brands/casio/casio1.webp`
        },
        {
            code:`MTP-1335D-1AVDF`,
            name:`CASIO NAM – QUARTZ (PIN) – DÂY KIM LOẠI (MTP-1335D-1AVDF)`,
            intro:`Đồng hồ Casio MTP-1335D-1AVDF dành cho nam, mặt số đồng hồ màu đen có chi tiết chạm khắc, mặt kính khoáng, vỏ và dây đeo kim loại mạ bạc, 3 kim chỉ, còn có 1 lịch ngày và 1 lịch thứ.`,
            price:1503000,
            brand:`CASIO`,
            gender:`NAM`,
            img:`./product-img/img-for-brands/casio/casio1.webp`
        },
        {
            code:`FGW0100AW0`,
            name:`ORIENT FGW0100AW0 – NAM – QUARTZ (PIN) – MẶT SỐ 38MM, KÍNH SAPPHIRE, CHỐNG NƯỚC 5ATM`,
            intro:`
            Đồng hồ dây da Orient FGW0100AW0 dành cho nam giới với mặt đồng hồ nền trắng 2 tầng, điểm nhấn nổi bật với phiên bản mặt kính Sapphire size 38mm.`,
            price:4160000,
            brand:`ORIENT`,
            gender:`NAM`,
            img:`./product-img/img-for-brands/orient/orient1.webp`
        },
        {
            code:`RA-AR0001S10B`,
            name:`ORIENT OPEN HEART RA-AR0001S10B – NAM – AUTOMATIC – MẶT SỐ 40.8 MM, TRỮ CÓT 40 GIỜ, KÍNH SAPPHIRE`,
            intro:`Mẫu Orient RA-AR0001S10B thiết kế đặc trưng Open Heart với ô chân kính lộ ra 1 phần của bô máy cơ tạo nên vẻ độc đáo trước mặt kính Sapphire.`,
            price:11760000,
            brand:`ORIENT`,
            gender:`NAM`,
            img:`./product-img/img-for-brands/orient/orient2.webp`
        },
        {
            code:`EFV-550L-1AVUDF`,
            name:`CASIO EFV-550L-1AVUDF – NAM – QUARTZ (PIN)`,
            intro:`Mẫu Casio EFV-550L-1AVUDF mang đến cho phái mạnh vẻ ngoài lịch lãm nhưng cũng không kém phần trẻ trung đặc trưng thuộc dòng Edifice với kiểu dáng đồng hồ 6 kim đi kèm tính năng đo thời gian Chronograph.`,
            price:3529000,
            brand:`CASIO`,
            gender:`NAM`,
            img:`./product-img/img-for-brands/casio/casio2.webp`
        },
        {
            // Chuưa xong
            code:`DW00100245`,
            name:`DANIEL WELLINGTON DW00100245 – NỮ – QUARTZ (PIN)`,
            intro:`Mẫu đồng hồ DW00100245 các chi tiết kim chỉ cùng vạch số được tạo hình mỏng tinh tế với tone màu vàng hồng mang lại vẻ thời tranh thanh lịch cho phái đẹp đến từ thương hiệu Daniel Wellington.`,
            price:4075000,
            brand:`DANIEL WELLINGTON`,
            gender:`NỮ`,
            img:`./product-img/img-for-brands/daniel-wl/daniel1.webp`
        },
        {
            code:`MTP-1381D-1AVDF`,
            name:`CASIO MTP-1381D-1AVDF – NAM – QUARTZ (PIN)`,
            intro:`Đồng hồ Casio MTP-1381D-1AVDF có vỏ và dây đeo kim loại phủ bạc sáng bóng, nền số màu đen mạnh mẽ với kim chỉ và vạch số được phủ phản quang nổi bật, lịch thứ vị trí 12h và lịch ngày vị trí 6h.`,
            price:1710000,
            brand:`CASIO`,
            gender:`NAM`,
            img:`./product-img/img-for-brands/casio/casio3.webp`
        },
        {
            code:`GA-110-1BDR`,
            name:`G-SHOCK GA-110-1BDR – NAM – KÍNH CỨNG – QUARTZ (PIN)`,
            intro:`Đồng hồ G-Shock GA-110-1BDR với chất liệu nhựa cao cấp siêu bền, vỏ và dây đeo có màu đen, chống va chạm mạnh, mặt kính khoáng chịu lực, khả năng chống nước lên đến 20ATM.`,
            price:4612000,
            brand:`G-SHOCK`,
            gender:`NAM`,
            img:`./product-img/img-for-brands/g-shock/g1.webp`
        },
        {
            code:`D154TWH`,
            name:`DOXA GRANDEMETRE D154TWH – NAM – HANDWINDING (LÊN CÓT BẰNG TAY) `,
            intro:`Mẫu Doxa D154TWH phiên bản giới hạn 1000 chiếc trên toàn thế giới, sự kết hợp cách điệu giữa các vạch số cùng chữ số la mã được mạ vàng sang trọng, điểm nhấn với nền mặt số Skeleton lộ máy `,
            price:135830000,
            brand:`DOXA`,
            gender:`NAM`,
            img:`./product-img/img-for-brands/doxa/doxa1.webp`
        },
        {
            code:`T063.617.36.037.00`,
            name:`TISSOT TRADITION T063.617.36.037.00 – NAM – QUARTZ (PIN)`,
            intro:`Đồng hồ Tissot T063.617.36.037.00 có niềng kim loại bo tròn tinh tế quanh nền số màu trắng trang nhã, kim chỉ và vạch số được dát mỏng tinh tế, dây đeo da màu nâu có vân đem lại phong cách thời trang mang vẻ lịch lãm, nam tính.`,
            price:14700000,
            brand:`TISSOT`,
            gender:`NAM`,
            img:`./product-img/img-for-brands/tissot/tissot1.webp`
        },
        {
            code:`MTP-1384D-1AVDF`,
            name:`CASIO MTP-1384D-1AVDF – NAM – QUARTZ (PIN) `,
            intro:`Với mặt số đồng hồ Casio MTP-1384D-1AVDF màu đen mạnh mẽ, kim chỉ và vạch chỉ giờ bằng số La Mã được làm mỏng tinh tế nổi bật trên nền số, dây đeo kim loại lịch lãm, đồng hồ chịu được độ sâu 10ATM phù hợp cho các hoạt động dưới nước trừ việc lặn.`,
            price:2280000,
            brand:`CASIO`,
            gender:`NAM`,
            img:`./product-img/img-for-brands/casio/casio4.webp`
        },
        {
            code:`MTP-1302D-7A1VDF`,
            name:`CASIO MTP-1302D-7A1VDF – NAM – QUARTZ (PIN)`,
            intro:`Đồng hồ Casio MTP-1302D-7A1VDF có kiểu dáng truyền thống với mặt số tròn, niềng được tạo khía nổi bật quanh nền trắng mặt số, kim chỉ và vạch số được mạ bạc trên nền số.`,
            price:1347000,
            brand:`CASIO`,
            gender:`NAM`,
            img:`./product-img/img-for-brands/casio/casio5.webp`
        },
        {
            code:`RE-AV0001S00B`,
            name:`ORIENT STAR OPEN HEART RE-AV0001S00B – NAM – AUTOMATIC`,
            intro:`Mẫu Orient Star Open Heart RE-AV0001S00B nổi bật với ô chân kính lộ tim phô diễn ra 1 phần hoạt động bộ máy cơ bên trong tạo nên vẻ độc đáo sang trọng với phần vỏ máy kim loại mạ vàng hồng.`,
            price:22300000,
            brand:`ORIENT`,
            gender:`NAM`,
            img:`./product-img/img-for-brands/orient/orient3.webp`
        },
        {
            code:`D221RSV`,
            name:`DOXA EXECUTIVE D221RSV – NỮ – KÍNH SAPPHIRE – AUTOMATIC (TỰ ĐỘNG)`,
            intro:`Ẩn bên dưới mặt kính Sapphire với nền mặt số được gia công tinh xảo đính các viên kim cương tạo nên phụ kiện thời trang sang trọng dành cho phái đẹp với phiên bản Doxa D221RSV.`,
            price:39470000,
            brand:`DOXA`,
            gender:`NỮ`,
            img:`./product-img/img-for-brands/doxa/doxa2.webp`
        },
        {
            code:`BI5072-01A`,
            name:`CITIZEN BI5072-01A – NAM – QUARTZ (PIN)`,
            intro:`Ẩn chứa dưới vẻ ngoài giản dị của mẫu Citizen BI5072-01A với mẫu dây da lịch lãm tông màu nâu, các chi tiết vạch số tạo hình mỏng chứa đựng sự tinh tế sang trọng khi được bao phủ tông màu vàng nổi bật.`,
            price:3685000,
            brand:`CITIZEN`,
            gender:`NAM`,
            img:`./product-img/img-for-brands/citizen/citizen1.webp`
        },
        {
            code:`RA-AP0005B10B`,
            name:`ORIENT BAMBINO RA-AP0005B10B – NAM – AUTOMATIC`,
            intro:`Mẫu đồng hồ nam Orient RA-AP0005B10B mang phong cách lịch lãm với mẫu dây da đen có vân kết hợp cùng thiết kế chức năng kim giây được phân ra ô số riêng biệt tạo nên vẻ độc đáo.`,
            price:8320000,
            brand:`ORIENT`,
            gender:`NAM`,
            img:`./product-img/img-for-brands/orient/orient4.webp`
        },
        {
            code:`FAG00002W0`,
            name:`ORIENT CABALLERO FAG00002W0 – NAM – AUTOMATIC (TỰ ĐỘNG)`,
            intro:`Mẫu đồng hồ nam Orient FAG00002W0 với phong cách cổ điển khi kết hợp giữa vỏ máy bằng kim loại mạ vàng ánh lên sự sang trọng phối cùng bộ dây đeo bằng da tông màu nâu lịch lãm.`,
            price:8690000,
            brand:`ORIENT`,
            gender:`NAM`,
            img:`./product-img/img-for-brands/orient/orient5.webp`
        },
        {
            code:`A158WA-1DF`,
            name:`CASIO A158WA-1DF – NAM – QUARTZ (PIN)`,
            intro:`Mẫu đồng hồ nam Casio A158WA-1DF với kiểu dáng vuông huyền thoại, mặt số điện tử hiện thị nhiều chức năng tiện ích cho người dùng, vỏ máy cùng dây đeo kim loại màu bạc tạo nên sự chắc chắn mạnh mẽ.`,
            price:856000,
            brand:`CASIO`,
            gender:`NAM`,
            img:`./product-img/img-for-brands/casio/casio6.webp`
        },
        {
            code:`AQ-S810W-1A4VDF`,
            name:`CASIO AQ-S810W-1A4VDF – NAM – TOUGH SOLAR (NĂNG LƯỢNG ÁNH SÁNG)`,
            intro:`Mẫu đồng hồ Casio AQ-S810W-1A4VDF ấn tượng với công nghệ Tough Solar (Năng Lượng Ánh Sáng), vỏ máy được thiết kế tạo hình các góc cạnh phủ tông màu xám phối cùng bộ dây đeo bằng cao su đen tạo nên vẻ cá tính năng động.`,
            price:2203000,
            brand:`CASIO`,
            gender:`NAM`,
            img:`./product-img/img-for-brands/casio/casio7.webp`
        },
        {
            code:`EFR-526L-2AVUDF`,
            name:`CASIO EFR-526L-2AVUDF – NAM – QUARTZ (PIN)`,
            intro:`Đồng hồ Casio EFR-526L-2AVUDF với thiết kế dành cho nam theo phong cách thời trang, kim chỉ và vạch số to rõ nổi bật trên nền số xanh thể thao, ô lịch ngày vị trí 3 giờ, dây đeo bằng da màu xanh tạo vẻ thời trang sành điệu trẻ trung.`,
            price:3356000,
            brand:`CASIO`,
            gender:`NAM`,
            img:`./product-img/img-for-brands/casio/casio8.webp`
        },
        {
            code:`MTP-V006GL-7BUDF`,
            name:`CASIO MTP-V006GL-7BUDF – NAM – QUARTZ (PIN)`,
            intro:`Đồng hồ Casio MTP-V006GL-7BUDF với mặt số tròn truyền thống, màu vàng của niềng bao quanh màu trắng của nền số, trung tâm mặt số có 3 kim chỉ màu vàng và vạch số La Mã phủ màu đen nổi bật.`,
            price:932000,
            brand:`CASIO`,
            gender:`NAM`,
            img:`./product-img/img-for-brands/casio/casio9.webp`
        },
        {
            code:`0606115`,
            name:`MOVADO 0606115 – NAM – KÍNH SAPPHIRE – AUTOMATIC (TỰ ĐỘNG)`,
            intro:`Đồng hồ Movado 0606115 với thiết kế mặt số trơn màu đen, 2 kim chỉ được mạ bạc, logo hình tượng mặt trời vị trí 12h nổi bật trên nền mặt số, niềng và dây đeo kim loại bằng thép không gỉ.`,
            price:54500000,
            brand:`MOVADO`,
            gender:`NAM`,
            img:`./product-img/img-for-brands/movado/movado1.webp`
        },
        {
            code:`BI1050-56L`,
            name:`CITIZEN BI1050-56L – NAM – QUARTZ (PIN)`,
            intro:`Mẫu đồng hồ Citizen BI1050-56L được thiết kế tinh tế với chất liệu thép không gỉ, mặt đồng hồ có nền xanh 2 tầng, có chữ số vạch lớn, và còn có 1 lịch ngày.`,
            price:3285000,
            brand:`CITIZEN`,
            gender:`NAM`,
            img:`./product-img/img-for-brands/citizen/citizen2.webp`
        },
        {
            code:`SRPG33K1`,
            name:`SEIKO 5 FIELD SPORTS STYLE SRPG33K1 – NAM – AUTOMATIC (TỰ ĐỘNG)`,
            intro:`Mẫu Seiko SRPG33K1 phiên bản dây vải phong cách năng động, chi tiết kim chỉ cùng các cọc chấm tròn nhỏ được phủ dạ quang trên nền mặt số xanh kích thước 39.4mm.`,
            price:7090000,
            brand:`SEIKO`,
            gender:`NAM`,
            img:`./product-img/img-for-brands/seiko/seiko1.webp`
        },
        {
            code:`DW00100425`,
            name:`DANIEL WELLINGTON ICONIC MOTION DW00100425 – NAM – QUARTZ (PIN)`,
            intro:`Mẫu đồng hồ DW Iconic Motion DW00100425 với phiên bản phần dây đeo cao su phong cách trẻ trung năng động, nổi bật với khả năng chịu nước lên đến 10atm.`,
            price:6468000,
            brand:`DANIEL WELLINGTON`,
            gender:`NAM`,
            img:`./product-img/img-for-brands/daniel-wl/daniel2.webp`
        },
        {
            code:`NH8394-70H`,
            name:`CITIZEN C7 NH8394-70H – NAM – AUTOMATIC (TỰ ĐỘNG)`,
            intro:`Mẫu Citizen C7 NH8394-70H phiên bản dây đeo demi thời trang phối cùng các chi tiết kim chỉ cùng cọc vạch số mạ vàng hồng sang trọng trên nền mặt số 40mm với họa tiết trải tia nhẹ.`,
            price:9177000,
            brand:`CITIZEN`,
            gender:`NAM`,
            img:`./product-img/img-for-brands/citizen/citizen3.webp`
        },
        {
            code:`AK5000-54A`,
            name:`CITIZEN AK5000-54A – NAM – QUARTZ (PIN)`,
            intro:`Mẫu Citizen AK5000-54A phiên bản tính năng lịch trăng sao nổi bật trên nền mặt số size 42mm với họa tiết trải tia kiểu dáng trẻ trung.`,
            price:3985000,
            brand:`CITIZEN`,
            gender:`NAM`,
            img:`./product-img/img-for-brands/citizen/citizen4.webp`
        },
        {
            code:`T101.410.44.031.00`,
            name:`TISSOT PR 100 T101.410.44.031.00 – NAM – QUARTZ (PIN)`,
            intro:`Mẫu Tissot T101.410.44.031.00 phiên bản mặt số trắng đơn giản 3 kim trẻ trung cho phái mạnh, điểm nhấn nổi bật với thiết kế dây vỏ đồng hồ chất liệu siêu nhẹ Titanium.`,
            price:11200000,
            brand:`TISSOT`,
            gender:`NAM`,
            img:`./product-img/img-for-brands/tissot/tissot2.webp`
        },
        {
            code:`GA-2000-1A2DR`,
            name:`G-SHOCK GA-2000-1A2DR – NAM – KÍNH CỨNG – QUARTZ (PIN)`,
            intro:`Mẫu G-Shock GA-2000-1A2DR phần vỏ viền ngoài tạo hình nền cọc số mang lại vẻ thể thao năng động cùng các ô số điện tử hiện thị chức năng lịch và đo thời gian.`,
            price:4638000 ,
            brand:`G-SHOCK`,
            gender:`NAM`,
            img:`./product-img/img-for-brands/g-shock/g2.webp`
        },
        {
            code:`D124RBKW`,
            name:`DOXA CALEX D124RBKW – NAM – KÍNH SAPPHIRE – AUTOMATIC (TỰ ĐỘNG)`,
            intro:`Mẫu đồng hồ D124RBKW mang đến một trải nghiệm nam tính đến từ bộ máy cơ dày dặn, ẩn chứa bên dưới mặt kính Sapphire nền cọc số la mã mang đến một sắc màu thời trang được tạo nét cách tân trẻ trung đến từ thương hiệu Doxa.`,
            price:31390000,
            brand:`DOXA`,
            gender:`NAM`,
            img:`./product-img/img-for-brands/doxa/doxa3.webp`
        },
        {
            code:`NH7524-55A`,
            name:`CITIZEN NH7524-55A – NAM – KÍNH SAPPHIRE – AUTOMATIC (TỰ ĐỘNG)`,
            intro:`Đồng hồ Citizen NH7524-55A với kiểu dáng cổ điển, mặt số tròn lớn nam tính, nền số màu trắng cùng kim chỉ và vạch số phủ màu vàng nổi bật, dây đeo demi tinh tế, còn có 1 lịch ngày vị trí 3h tiện dụng.`,
            price:7985000,
            brand:`CITIZEN`,
            gender:`NAM`,
            img:`./product-img/img-for-brands/citizen/citizen5.webp`
        },
        {
            code:`DW-5600BB-1DR`,
            name:`G-SHOCK DW-5600BB-1DR – NAM – KÍNH CỨNG – QUARTZ (PIN)`,
            intro:`Trẻ trung nam tính với thiết kế vỏ máy khung nhựa dập nổi với mẫu G-Shock DW-5600BB-1DR cùng khả năng chịu nước lên đến 20 ATM thích hợp cho bạn trẻ năng động với nền mặt số điện tử hiện thị đa chức năng.`,
            price:3524000,
            brand:`G-SHOCK`,
            gender:`NAM`,
            img:`./product-img/img-for-brands/g-shock/g3.webp`
        },
        {
            code:`FAG03001D0`,
            name:`ORIENT GOLDEN EYE 2 FAG03001D0 – NAM – AUTOMATIC (TỰ ĐỘNG)`,
            intro:`Mẫu đồng hồ Orient Golden Eye 2 FAG03001D0 vẻ ngoài nam tính với kích thước dày dặn thiết kế độc đáo cùng nền mặt số với ô chân kính phô diễn ra 1 phần bên trong trải nghiệm đến từ bộ máy cơ.`,
            price:9320000,
            brand:`ORIENT`,
            gender:`NAM`,
            img:`./product-img/img-for-brands/orient/orient6.webp`
        },
        {
            code:`D201RSV`,
            name:`DOXA EXECUTIVE SLIM D201RSV – NAM – KÍNH SAPPHIRE – QUARTZ (PIN)`,
            intro:`Mẫu Doxa D201RSV vẻ ngoài sang trọng với mẫu vạch số tạo hình mỏng mang lại sự tinh tế dành cho phái mạnh đầy nổi bật khi các chi tiết kim chỉ được phủ tông vàng hồng trẻ trung đầy cuốn hút.`,
            price:18190000,
            brand:`DOXA`,
            gender:`NAM`,
            img:`./product-img/img-for-brands/doxa/doxa4.webp`
        },
        {
            //Chưa
            code:`D156SBK`,
            name:`DOXA EXECUTIVE SLIM D156SBK – NỮ – KÍNH SAPPHIRE – QUARTZ (PIN)`,
            intro:`Mẫu Doxa D156SBK thiết kế nhỏ gọn kiểu dáng thanh mảnh nữ tính, vạch số được phủ màu vàng hồng nhằm tôn lên vẻ đẹp sang trọng trẻ trung của phái đẹp trước bề mặt kính Sapphire.`,
            price:14330000,
            brand:`DOXA`,
            gender:`NỮ`,
            img:`./product-img/img-for-brands/doxa/doxa5.webp`
        },
        {
            code:`D203SBU`,
            name:`DOXA EXECUTIVE SLIM D203SBU – NAM – KÍNH SAPPHIRE – QUARTZ (PIN)`,
            intro:`Mẫu Doxa D203SBU kiểu dáng mỏng mang lại vẻ ngoài trẻ trung tinh tế với nền mặt số được tạo hình hoa văn nổi phối cùng tông màu xanh nổi bật thời trang trước nền mặt kính Sapphire.`,
            price:14400000,
            brand:`DOXA`,
            gender:`NAM`,
            img:`./product-img/img-for-brands/doxa/doxa6.webp`
        },
        {
            code:`BM7370-89E`,
            name:`CITIZEN BM7370-89E – NAM – KÍNH SAPPHIRE – ECO-DRIVE (NĂNG LƯỢNG ÁNH SÁNG)`,
            intro:`Mẫu Citizen BM7370-89E ấn tượng một vẻ ngoài mạnh mẽ với tổng thể vỏ máy cùng dây đeo bằng kim loại bao phủ tông màu bạc sang trọng hiện khi đồng hồ được trang bị công nghệ Eco-Drive (Năng Lượng Ánh Sáng).`,
            price:8000000,
            brand:`CITIZEN`,
            gender:`NAM`,
            img:`./product-img/img-for-brands/citizen/citizen6.webp`
        },
        {
            code:`DW00100161`,
            name:`DANIEL WELLINGTON DW00100161 – NỮ – QUARTZ (PIN)`,
            intro:`Mẫu đồng hồ nữ Daniel Wellington DW00100161 khi kết hợp giữa vỏ máy cùng dây đeo kim loại dạng lưới cùng chung tông màu vàng hồng tạo nên phụ kiện thời trang trẻ trung dành riêng cho phái đẹp.`,
            price:4737000,
            brand:`DANIEL WELLINGTON`,
            gender:`NỮ`,
            img:`./product-img/img-for-brands/daniel-wl/daniel3.webp`
        },
        {
            code:`NJ0080-50A`,
            name:`CITIZEN NJ0080-50A – NAM – KÍNH SAPPHIRE – AUTOMATIC (TỰ ĐỘNG)`,
            intro:`Đồng hồ nam Citizen NJ0080-50A kích thước mặt số dày dặn với trải nghiệm bộ máy cơ dành cho phái nam, nổi bật với kim chỉ kiểu dáng mỏng tinh tế được phối tông màu xanh trẻ trung trên nền mặt số trắng trang nhã.`,
            price:11185000,
            brand:`CITIZEN`,
            gender:`NAM`,
            img:`./product-img/img-for-brands/citizen/citizen7.webp`
        },
        {
            code:`D155SST`,
            name:`DOXA EXECUTIVE SLIM D155SST – NAM – KÍNH SAPPHIRE – QUARTZ (PIN)`,
            intro:`Mẫu Doxa nam D155SST thiết kế chức năng theo phong cách giản dị, mặt số trắng size 39mm đơn giản 3 kim, các vạch số cùng chữ số 12 in theo phong cách chữ la mã được mạ vàng tạo điểm nhấn sang trọng.`,
            price:19150000,
            brand:`DOXA`,
            gender:`NAM`,
            img:`./product-img/img-for-brands/doxa/doxa7.webp`
        },
        {
            code:`NH8350-59L`,
            name:`CITIZEN NH8350-59L – NAM – AUTOMATIC (TỰ ĐỘNG)`,
            intro:`Đồng hồ nam Citizen NH8350-59L với thiết kế dành cho nam phong cách thời trang, kim chỉ và vạch số to rõ nổi bật trên nền xanh trẻ trung, ô lịch ngày lịch thứ vị trí 3 giờ, phối cùng dây đeo kim loại tạo nên vẻ thời trang.`,
            price:5785000,
            brand:`CITIZEN`,
            gender:`NAM`,
            img:`./product-img/img-for-brands/citizen/citizen9.webp`
        },
        {
            code:`L4.209.2.87.7`,
            name:`LONGINES GRANDE CLASSIQUE L4.209.2.87.7 – NỮ – QUARTZ (PIN)`,
            intro:`Đồng hồ Longines L4.209.2.87.7 có mặt số tròn nhỏ với vỏ kim loại bằng chất liệu thép không gỉ cao cấp bao quanh nền số màu trắng trang nhã, kim chỉ phủ màu đen tinh tế, cùng vạch số được đính pha lê quyến rũ nổi bật, dây đeo đờ mi đem lại phong cách thời trang đẳng cấp sang trọng, thanh lịch cho phái nữ.`,
            price:47437500,
            brand:`LONGINES`,
            gender:`NỮ`,
            img:`./product-img/img-for-brands/longine/longine1.webp`
        },
        {
            code:`DW00100007`,
            name:`DANIEL WELLINGTON CLASSIC DW00100007 – NAM – QUARTZ (PIN)`,
            intro:`Đồng hồ Daniel Wellington DW00100007 có mặt số tròn với viền mỏng tinh tế, kim chỉ và vạch số dát mỏng nổi bật trên nền số màu trắng trang nhã, dây đeo da màu đen bóng đem đến phong cách thời trang lịch lãm sang trọng cho phái mạnh.`,
            price:6010000,
            brand:`DANIEL WELLINGTON`,
            gender:`NAM`,
            img:`./product-img/img-for-brands/daniel-wl/daniel4.webp`
        },
        {
            code:`L4.910.4.11.6`,
            name:`LONGINES ELEGANT L4.910.4.11.6 – NAM – KÍNH SAPPHIRE – AUTOMATIC`,
            intro:`Đồng hồ Longines L4.910.4.11.6 có mặt số tròn với viền mỏng tinh tế, nền số màu trắng trang nhã cùng kim chỉ và chữ số chỉ giờ La Mã mỏng phủ màu đen nổi bật, dây đeo kim loại.`,
            price:50312500,
            brand:`LONGINES`,
            gender:`NAM`,
            img:`./product-img/img-for-brands/longine/longine2.webp`
        },
        {
            code:`ME3227`,
            name:`FOSSIL HERITAGE ME3227 – UNISEX (NAM/NỮ) – AUTOMATIC (TỰ ĐỘNG)`,
            intro:`Mẫu Fossil ME3227 dây đeo kim loại phiên bản dây vàng hồng demi thời trang, kiểu dáng đơn giản chức năng 3 kim trên nền mặt số kích thước trung tính 38mm.`,
            price:8590000,
            brand:`FOSSIL`,
            gender:`NỮ`,
            img:`./product-img/img-for-brands/fossil/fs1.webp`
        },
        {
            code:`ME3228`,
            name:`FOSSIL HERITAGE ME3228 – UNISEX (NAM/NỮ) – AUTOMATIC (CƠ)`,
            intro:`Mẫu Fossil ME3228 dây đeo kim loại phiên bản dây vàng demi tone màu vàng nhạt thời trang, kiểu dáng đơn giản chức năng 3 kim trên nền mặt số kích thước trung tính 38mm.`,
            price:8590000,
            brand:`FOSSIL`,
            gender:`NỮ`,
            img:`./product-img/img-for-brands/fossil/fs2.webp`
        },
        {
            code:`SRPG29K1`,
            name:`SEIKO 5 FIELD SPORTS STYLE SRPG29K1 – NAM – AUTOMATIC (TỰ ĐỘNG)`,
            intro:`Mẫu Seiko SRPG29K1 thiết kế đơn giản chức năng 3 kim, chi tiết kim chỉ cùng các cọc chấm tròn nhỏ được phủ dạ quang trên nền mặt số xanh 39.4mm.`,
            price:7075000,
            brand:`SEIKO`,
            gender:`NAM`,
            img:`./product-img/img-for-brands/seiko/seiko2.webp`
        },
        {
            code:`SRPG37K1`,
            name:`SEIKO 5 FIELD SPORTS STYLE SRPG37K1 – NAM – AUTOMATIC (TỰ ĐỘNG)`,
            intro:`Mẫu Seiko SRPG37K1 phiên bản dây vải phong cách năng động, chi tiết kim chỉ cùng các cọc chấm nhỏ được phủ dạ quang trên nền mặt số đen kích thước 39.4mm.`,
            price:7075000,
            brand:`SEIKO`,
            gender:`NAM`,
            img:`./product-img/img-for-brands/seiko/seiko3.webp`
        },
        {
            code:`SRPG35K1`,
            name:`SEIKO 5 FIELD SPORTS STYLE SRPG35K1 – NAM – AUTOMATIC (TỰ ĐỘNG)`,
            intro:`Mẫu Seiko SRPG35K1 phiên bản dây vải phong cách năng động, chi tiết kim chỉ cùng các cọc chấm nhỏ được phủ dạ quang trên nền mặt số đen kích thước 39.4mm.`,
            price:7075000,
            brand:`SEIKO`,
            gender:`NAM`,
            img:`./product-img/img-for-brands/seiko/seiko4.webp`
        },
        {
            code:`SRPG41K1`,
            name:`SEIKO 5 FIELD SPECIALIST STYLE SRPG41K1 – NAM – AUTOMATIC (TỰ ĐỘNG)`,
            intro:`Mẫu Seiko SRPG41K1 thiết kế đơn giản chức năng 3 kim, chi tiết kim chỉ cùng các cọc chấm nhỏ được phủ dạ quang trên nền mặt số kích thước 39.4mm.`,
            price:8050000,
            brand:`SEIKO`,
            gender:`NAM`,
            img:`./product-img/img-for-brands/seiko/seiko5.webp`
        },
        {
            code:`SRPG39K1`,
            name:`SEIKO 5 FIELD SPECIALIST STYLE SRPG39K1 – NAM – AUTOMATIC (TỰ ĐỘNG)`,
            intro:`Mẫu Seiko SRPG39K1 thiết kế đơn giản chức năng 3 kim, chi tiết kim chỉ cùng các cọc chấm tròn nhỏ được phủ dạ quang trên nền mặt số xanh kích thước 39.4mm.`,
            price:7075000,
            brand:`SEIKO`,
            gender:`NAM`,
            img:`./product-img/img-for-brands/seiko/seiko6.webp`
        },
        {
            code:`T101.210.26.036.00`,
            name:`TISSOT PR 100 T101.210.26.036.00 – NỮ – KÍNH SAPPHIRE – QUARTZ (PIN)`,
            intro:`Đồng hồ Tissot T101.210.26.036.00 có niềng kim loại màu đồng bao quanh nền số màu trắng, kim chỉ và vạch số được đính pha lê ở các vị trí 12h, 3h, 6h, 9h nổi bật, dây đeo bằng chất liệu da cao cấp màu nâu thanh lịch cho phái nữ.`,
            price:13650000,
            brand:`TISSOT`,
            gender:`NỮ`,
            img:`./product-img/img-for-brands/tissot/tissot3.webp`
        },
        {
            code:`SSA443J1`,
            name:`SEIKO PRESAGE SSA443J1 – NAM – AUTOMATIC (TỰ ĐỘNG)`,
            intro:`Mẫu Seiko SSA443J1 thiết kế open heart (máy cơ lộ tim) tạo nên vẻ độc đáo nổi bật trên nền mặt số trắng kích thước 41.8mm.`,
            price:15325000,
            brand:`SEIKO`,
            gender:`NAM`,
            img:`./product-img/img-for-brands/seiko/seiko7.webp`
        },
        {
            code:`SRK048P1`,
            name:`SEIKO SRK048P1 – NAM – KÍNH SAPPHIRE – QUARTZ (PIN)`,
            intro:`Mẫu Seiko SRK048P1 phiên bản kim giây được thiết kế không đồng trục tạo nên vẻ độc đáo trên nền mặt số kích thước 39mm được phối tone màu vàng nhạt.`,
            price:7600000,
            brand:`SEIKO`,
            gender:`NAM`,
            img:`./product-img/img-for-brands/seiko/seiko8.webp`
        },
        {
            code:`SRK049P1`,
            name:`SEIKO SRK049P1 – NAM – QUARTZ (PIN)`,
            intro:`Mẫu Seiko SRK049P1 phiên bản kim giây được thiết kế không đồng trục tạo nên vẻ độc đáo trên nền mặt số trắng kích thước 39mm.`,
            price:5600000,
            brand:`SEIKO`,
            gender:`NAM`,
            img:`./product-img/img-for-brands/seiko/seiko9.webp`
        },
        {
            code:`RE-AV0B03B00B`,
            name:`ORIENT STAR RE-AV0B03B00B – NAM – KÍNH SAPPHIRE – AUTOMATIC`,
            intro:`Mẫu Orient RE-AV0B03B00B phiên bản máy cơ khả năng trữ cót lên đến 50 giờ, thiết kế máy cơ lộ tim tạo nên vẻ độc đáo trên nền mặt số kích thước 41mm.`,
            price:25750000,
            brand:`ORIENT`,
            gender:`NAM`,
            img:`./product-img/img-for-brands/orient/orient7.webp`
        },
        {
            code:`RA-AS0103A10B`,
            name:`ORIENT SUN AND MOON RA-AS0103A10B – NAM – AUTOMATIC (TỰ ĐỘNG)`,
            intro:`Mẫu Orient RA-AS0103A10B phiên bản máy cơ thiết kế kiểu dáng cơ lộ tim tạo nên vẻ độc đáo trên nền mặt số với kích thước 41mm.`,
            price:11490000,
            brand:`ORIENT`,
            gender:`NAM`,
            img:`./product-img/img-for-brands/orient/orient8.webp`
        },
        {
            code:`RA-SP0002S10B`,
            name:`ORIENT RA-SP0002S10B – NAM – QUARTZ (PIN)`,
            intro:`Mẫu Orient RA-SP0002S10B phiên bản kim xanh tone màu nổi bật trên mặt số trắng size 39mm, cùng với thiết kế độc đáo không đồng trục trên chức năng kim giây.`,
            price:5420000,
            brand:`ORIENT`,
            gender:`NAM`,
            img:`./product-img/img-for-brands/orient/orient9.webp`
        },
        {
            // Ko co
            code:`A3152.1113Q`,
            name:`ADRIATICA NAM/NỮ – QUARTZ (PIN)`,
            intro:`Đồng hồ thời trang Adriatica A3152.1113Q với chất lượng cao cấp thép không gỉ mạ vàng sang trọng, mặt đồng hồ chữ nhật nền trắng, chữ số vạch vàng, còn có 3 kim chỉ cũng được mạ vàng.`,
            price:4310000,
            brand:`ADRIATICA`,
            gender:`NỮ`,
            img:`./product-img/img-for-brands/adriatica/ad1.webp`
        },
        {  
            // ko
            code:`A3811.51B3QZ`,
            name:`ADRIATICA A3811.51B3QZ – NỮ – KÍNH SAPPHIRE – QUARTZ (PIN)`,
            intro:`Mẫu đồng hồ nữ Adriatica A3811.51B3QZ với kim chỉ và vạch số cùng tông màu tím trẻ trung nổi bật trên nền mặt số màu trắng, mặt đồng hồ kiểu dáng tròn nhỏ nữ tính, với viền ngoài thiết kế tinh xảo, đem lại vẻ thời trang dành cho phái nữ.`,
            price:6310000,
            brand:`ADRIATICA`,
            gender:`NỮ`,
            img:`./product-img/img-for-brands/adriatica/ad2.webp`
        },
        {
            // Lầmm lỡ cỡ
            code:`L4.860.2.11.7`,
            name:`LONGINES LYRE L4.860.2.11.7 – NAM – KÍNH SAPPHIRE – AUTOMATIC (TỰ ĐỘNG)`,
            intro:`Đồng hồ Longines L4.860.2.11.7 có kim chỉ thanh mãnh màu vàng và vạch số La Mã phủ màu đen nổi bật trên nền số màu trắng trang nhã, dây đeo kim loại màu demi thời trang sang trọng.`,
            price:40250000,
            brand:`LONGINES`,
            gender:`NAM`,
            img:`./product-img/img-for-brands/longine/longine3.webp`
        },
        {
            code:`L4.961.4.92.6`,
            name:`LONGINES LYRE L4.961.4.92.6 – NAM – AUTOMATIC (TỰ ĐỘNG)`,
            intro:`Mẫu Longines L4.961.4.92.6 phiên bản trẻ trung với phần vỏ máy cơ được thiết kế siêu mỏng chỉ dày 8mm, vẻ ngoài đơn giản với chức năng 3 kim trên nền mặt số xanh kích thước 40mm.`,
            price:41496000,
            brand:`LONGINES`,
            gender:`NAM`,
            img:`./product-img/img-for-brands/longine/longine4.webp`
        },
        {
            code:`DW00100519`,
            name:`DANIEL WELLINGTON QUADRO STUDIO DW00100519 – NỮ – QUARTZ (PIN)`,
            intro:`Mẫu Daniel Wellington DW00100519 phiên bản mặt số vuông xanh chức năng đơn giản 2 kim thời trang trẻ trung kết hợp cùng mẫu dây đeo kim loại được phối tone màu vàng hồng.`,
            price:5195000,
            brand:`DANIEL WELLINGTON`,
            gender:`NỮ`,
            img:`./product-img/img-for-brands/daniel-wl/daniel5.webp`
        },
        {
            code:`L2.893.4.77.3`,
            name:`LONGINES MASTER L2.893.4.77.3 – NAM – KÍNH SAPPHIRE – AUTOMATIC (TỰ ĐỘNG)`,
            intro:`Mẫu Longines L2.893.4.77.3 thời trang sang trọng với phiên bản 13 viên kim cương đính tương ứng với 12 múi giờ hiện thị trên nền mặt số trắng kích thước 42mm.`,
            price:71875000,
            brand:`LONGINES`,
            gender:`NAM`,
            img:`./product-img/img-for-brands/longine/longine5.webp`
        },
        {
            code:`DW00100517`,
            name:`DANIEL WELLINGTON QUADRO STUDIO DW00100517 – NỮ – QUARTZ (PIN)`,
            intro:`Mẫu Daniel Wellington DW00100517 phiên bản mặt số vuông trắng thời trang trẻ trung kết hợp cùng mẫu dây đeo kim loại được phối tone màu vàng hồng.`,
            price:5195000,
            brand:`DANIEL WELLINGTON`,
            gender:`NỮ`,
            img:`./product-img/img-for-brands/daniel-wl/daniel6.webp`
        },
        {
            code:`DW00100482`,
            name:`DANIEL WELLINGTON ICONIC LINK DW00100482 – NAM – AUTOMATIC (TỰ ĐỘNG)`,
            intro:`Mẫu Daniel Wellington DW00100482 phiên bản Iconic với thiết kế kiểu máy cơ tạo hình dày dặn thời trang nam tính nổi bật với khả năng chịu nước lên đến 10atm.`,
            price:9880000,
            brand:`DANIEL WELLINGTON`,
            gender:`NAM`,
            img:`./product-img/img-for-brands/daniel-wl/daniel7.webp`
        },
        {
            code:`DW00100432`,
            name:`DANIEL WELLINGTON QUADRO DW00100432 – NỮ – QUARTZ (PIN)`,
            intro:`Mẫu Daniel Wellington DW00100432 mặt số đen kiểu dáng vuông nhỏ trẻ trung với thiết kế siêu mỏng của vỏ máy pin chỉ 6mm, phần dây vỏ đồng hồ bằng kim loại được phối tone màu vàng hồng.`,
            price:4940000,
            brand:`DANIEL WELLINGTON`,
            gender:`NỮ`,
            img:`./product-img/img-for-brands/daniel-wl/daniel8.webp`
        },
        {
            code:`T006.407.22.036.00`,
            name:`TISSOT LE LOCLE T006.407.22.036.00 – NAM – KÍNH SAPPHIRE – AUTOMATIC (TỰ ĐỘNG)`,
            intro:`Mẫu Tissot T006.407.22.036.00 phiên bản thiết kế sang trọng với 8 viên kim cương đính nổi bật trên nền mặt số size 39mm cùng với thiết kế họa tiết Guilloche phong cách thời trang.`,
            price:25550000,
            brand:`TISSOT`,
            gender:`NAM`,
            img:`./product-img/img-for-brands/tissot/tissot4.webp`
        },
        {
            code:`ES4571`,
            name:`FOSSIL ES4571 – NỮ – QUARTZ (PIN)`,
            intro:`Mẫu Fossil ES4571 chi tiết kế kim chỉ cùng cọc vạch số tạo nét thanh mảnh nữ tính phối tone màu vàng hồng trẻ trung sang trọng cho phái đẹp.`,
            price:3940000,
            brand:`FOSSIL`,
            gender:`NỮ`,
            img:`./product-img/img-for-brands/fossil/fs3.webp`
        },
        {
            code:`T109.410.16.053.00`,
            name:`TISSOT EVERYTIME MEDIUM T109.410.16.053.00 – NAM – QUARTZ (PIN)`,
            intro:`Mẫu Tissot T109.410.16.053.00 phiên bản giản dị 3 kim trên nền mặt đen kích thước size 38mm, cọc số la mã mỏng cách tân phối cùng mẫu dây da tạo nên vẻ trẻ trung lịch lãm dành cho phái mạnh.`,
            price:7350000,
            brand:`TISSOT`,
            gender:`NAM`,
            img:`./product-img/img-for-brands/tissot/tissot5.webp`
        },
        {
            code:`D182SWB`,
            name:`DOXA CALEX D182SWB – NỮ – KÍNH SAPPHIRE – QUARTZ (PIN)`,
            intro:`Mẫu Doxa nữ D182SWB mặt số tròn truyền thống size 35mm sang trọng nổi bật đính kèm 8 viên kim cương tạo nên vẻ thời trang cho phái đẹp.`,
            price:18720000,
            brand:`DOXA`,
            gender:`NỮ`,
            img:`./product-img/img-for-brands/doxa/doxa8.webp`
        },
        {
            code:`T109.410.11.033.10`,
            name:`TISSOT T109.410.11.033.10 – NAM – KÍNH SAPPHIRE – QUARTZ (PIN)`,
            intro:`Mẫu Tissot T109.410.11.033.10 thiết kế mỏng phần vỏ máy kim loại mạ bạc bề dày vỏ 6mm trẻ trung dành cho phái mạnh, nền cọc số la mã tạo nét mỏng cách tân trên nền kính Sapphire.`,
            price:9275000,
            brand:`TISSOT`,
            gender:`NAM`,
            img:`./product-img/img-for-brands/tissot/tissot6.webp`
        },
        {
            code:`D220SGY`,
            name:`DOXA EXECUTIVE D220SGY – NAM – KÍNH SAPPHIRE – AUTOMATIC (TỰ ĐỘNG)`,
            intro:`Mang đến một vẻ ngoài chiếc đồng hồ 3 kim giản dị Doxa D220SGY với phiên bản màu bạc sang trọng, yếu tố tạo nên sự nổi bật với mặt số được đính kèm các viên kim cương chứa đựng sự tinh tế đầy quyền lực cho phái mạnh.`,
            price:37560000,
            brand:`DOXA`,
            gender:`NAM`,
            img:`./product-img/img-for-brands/doxa/doxa9.webp`
        },
        {
            code:`T006.407.22.033.00`,
            name:`TISSOT LE LOCLE POWERMATIC 80 T006.407.22.033.00 – NAM – AUTOMATIC`,
            intro:`Mẫu đồng hồ T006.407.22.033.00 nổi bật cùng các chi tiết núm vặn cho đến nền cọc số phong cách chữ la mã tạo nét mỏng cách tân khoác lên vẻ sang trọng thời trang cho phái mạnh đến từ thương hiệu Tissot.`,
            price:22750000,
            brand:`TISSOT`,
            gender:`NAM`,
            img:`./product-img/img-for-brands/tissot/tissot7.webp`
        },
        {
            code:`T109.210.16.033.00`,
            name:`TISSOT EVERYTIME T109.210.16.033.00 – NỮ – QUARTZ (PIN)`,
            intro:`Mẫu Tissot T109.210.16.033.00  phong cách giản dị với nền cọc số chữ la mã được tạo nét thanh mảnh trên nền mặt số trắng mang lại vẻ trẻ trung thanh lịch cho phái đẹp.`,
            price:7000000,
            brand:`TISSOT`,
            gender:`NỮ`,
            img:`./product-img/img-for-brands/tissot/tissot8.webp`
        },
        
        {
            code:`T109.610.16.031.00`,
            name:`TISSOT T109.610.16.031.00 – NAM – KÍNH SAPPHIRE – QUARTZ (PIN)`,
            intro:`Mẫu đồng hồ T109.610.16.031.00 với thiết kế giản dị cùng các chi tiết kim chỉ cho đến bộ máy được tạo hình mỏng của sự tinh tế với độ hoàn chỉnh đến từ thương hiệu Tissot.`,
            price:7700000,
            brand:`TISSOT`,
            gender:`NAM`,
            img:`./product-img/img-for-brands/tissot/tissot9.webp`
        },
        {
            code:`GA-100CF-1ADR`,
            name:`G-SHOCK GA-100CF-1ADR – NAM – QUARTZ (PIN)`,
            intro:`Mẫu G-Shock GA-100CF-1ADR tạo nên vẻ mạnh mẽ với phần vỏ máy được thiết kế tạo hình dập nổi, nền mặt số với kết hợp độc đáo giữa tính năng kim chỉ cùng mặt số điện tử với nhiều tính năng tiện ích tạo nên vẻ cá tính.`,
            price:4145000,
            brand:`G-SHOCK`,
            gender:`NAM`,
            img:`./product-img/img-for-brands/g-shock/g4.webp`
        },
        {
            code:`K2G23126`,
            name:`CALVIN KLEIN K2G23126 – NỮ – QUARTZ (PIN)`,
            intro:`Mẫu Calvin Klein K2G23126 kiểu dáng đơn giản 2 kim trên mặt nền trắng size 31mm đi cùng thiết kế mỏng thời trang cho phái đẹp với các chi tiết kim chỉ vạch số.`,
            price:6500000,
            brand:`CALVIN KLEIN (CK)`,
            gender:`NỮ`,
            img:`./product-img/img-for-brands/ck/ck1.webp`
        },
        {
            code:`DW00100521`,
            name:`DANIEL WELLINGTON QUADRO STUDIO DW00100521 – NỮ – QUARTZ (PIN)`,
            intro:`Mẫu Daniel Wellington DW00100521 phiên bản mặt số vuông trắng thời trang trẻ trung kết hợp cùng mẫu dây đeo kim loại được phối tone màu bạc.`,
            price:5195000,
            brand:`DANIEL WELLINGTON`,
            gender:`NỮ`,
            img:`./product-img/img-for-brands/daniel-wl/daniel9.webp`
        },
        {
            code:`GA-1000-1ADR`,
            name:`G-SHOCK GA-1000-1ADR – NAM – QUARTZ (PIN)`,
            intro:`Đồng hồ thể thao nam G-Shock GA-1000-1ADR với vỏ và dây đeo màu đen mạnh mẽ, vạch chỉ giờ và kim chỉ trắng được phủ phản quang cùng đèn LED giúp nhìn rõ trong đêm, ngoài ra điều đặc biệt là có La Bàn Số giúp đi dã ngoại hay du lịch.`,
            price:8576000,
            brand:`G-SHOCK`,
            gender:`NAM`,
            img:`./product-img/img-for-brands/g-shock/g5.webp`
        },
        {
            // Làm lỡ cỡ
            code:`ES3284`,
            name:`FOSSIL ES3284 – NỮ – QUARTZ (PIN) `,
            intro:`Mẫu đồng hồ nữ thời trang sang trọng Fossil ES3284 được thiết kế tinh tế với các hạt pha lê được đính xung quanh đồng hồ còn có mạ vàng.`,
            price:4320000,
            brand:`FOSSIL`,
            gender:`NỮ`,
            img:`./product-img/img-for-brands/fossil/fs4.webp`
        },
        {
            code:`GA-110-1ADR`,
            name:`G-SHOCK NAM – QUARTZ (PIN)`,
            intro:`Đồng hồ G-Shock GA-110-1ADR với mặt đồng hồ có nền xám viền đem còn có 3 kim, vỏ và dây đeo làm từ chất liệu nhựa cao cấp đen, mặt kính khoáng chịu lực và chống thấm nước ở độ sâu 200m.`,
            price:4612000,
            brand:`G-SHOCK`,
            gender:`NAM`,
            img:`./product-img/img-for-brands/g-shock/g6.webp`
        },
        {
            code:`MK5866`,
            name:`MICHAEL KORS NỮ – QUARTZ (PIN)`,
            intro:`Với thiết kế đơn giản và thanh lịch, Michael Kors MK5866 dành cho nữ với mặt nền trắng bạc và chữ số La Mã rõ ràng, còn có 1 ô đồng hồ phụ nhỏ hiển thị giây, 2 kim lớn chỉ giờ.`,
            price:8450000,
            brand:`MICHAEL KORS`,
            gender:`NỮ`,
            img:`./product-img/img-for-brands/michael/michal1.webp`
        },
        {
            code:`GA-2100-4ADR`,
            name:`G-SHOCK GA-2100-4ADR – NAM – QUARTZ (PIN)`,
            intro:`Mẫu G-Shock GA-2100-4ADR phiên bản tone màu đỏ trẻ trung nổi bật phần dây vỏ nhựa năng động, đi kèm với khả năng chịu nước lên đến 20ATM.`,
            price:3628000,
            brand:`G-SHOCK`,
            gender:`NAM`,
            img:`./product-img/img-for-brands/g-shock/g7.webp`
        },
        {
            code:`MK1066SET`,
            name:`MICHAEL KORS MK1066SET – NỮ – QUARTZ (PIN)`,
            intro:`Mẫu Michael Kors MK1066SET phiên bản thời trang tặng kèm mẫu vòng đeo tay vàng hồng, thiết kế đính 12 viên đá pha lê nhỏ trên nền mặt số 32mm tone màu trắng xà cừ phong cách trẻ trung cho phái đẹp.`,
            price:8590000,
            brand:`MICHAEL KORS`,
            gender:`NỮ`,
            img:`./product-img/img-for-brands/michael/michal2.webp`
        },
        {
            code:`MK2779`,
            name:`MICHAEL KORS MK2779 – NỮ – QUARTZ`,
            intro:`Mẫu Michael Kors MK2779 mặt số trắng đơn giản 3 kim với thiết kế size lớn 43mm tạo nên điểm nhấn khi phối cùng mẫu dây da trơn bản nhỏ tạo nên vẻ thời trang thanh lịch.`,
            price:4420000,
            brand:`MICHAEL KORS`,
            gender:`NỮ`,
            img:`./product-img/img-for-brands/michael/michal3.webp`
        },
        {
            code:`MK7281`,
            name:`MICHAEL KORS MK7281 – NỮ – QUARTZ (PIN)`,
            intro:`Mẫu Michael Kors MK7281 các chi tiết cọc vạch số được tạo hình các viên pha lê vách nhọn nổi bật trên nền mặt số đen kích thước 37mm.`,
            price:6600000,
            brand:`MICHAEL KORS`,
            gender:`NỮ`,
            img:`./product-img/img-for-brands/michael/michal4.webp`
        },
        {
            code:`MK4689`,
            name:`MICHAEL KORS MK4689 – NỮ – QUARTZ (PIN)`,
            intro:`Mẫu Michael Kors MK4689 chi tiết nền cọc số la mã được tạo hình mỏng trẻ trung trên nền mặt số hình chữ nhật, phiên bản dây da được phối tone màu đỏ thời trang nổi bật cho phái đẹp.`,
            price:5890000,
            brand:`MICHAEL KORS`,
            gender:`NỮ`,
            img:`./product-img/img-for-brands/michael/michal5.webp`
        },
        {
            code:`MK3845`,
            name:`MICHAEL KORS MK3845 – NỮ – QUARTZ (PIN)`,
            intro:`Michael Kors MK3845 với thiết kế đính pha lê với vẻ ngoài sang trọng trên mặt số size lớn 37mm kết hợp cùng bộ dây đeo thời trang dây lưới phối tone vàng hồng. `,
            price:6600000,
            brand:`MICHAEL KORS`,
            gender:`NỮ`,
            img:`./product-img/img-for-brands/michael/michal6.webp`
        },
        {
            code:`MK3971`,
            name:`MICHAEL KORS MK3971 – NỮ – QUARTZ (PIN)`,
            intro:`Phiên bản Michael Kors MK3971 mặt xanh size 36mm điểm nhấn nổi bật với thiết kế tỉ mỉ đính kèm các viên pha lê thể hiện lên vẻ đẹp thời trang lộng lẫy cho phái đẹp.`,
            price:7260000,
            brand:`MICHAEL KORS`,
            gender:`NỮ`,
            img:`./product-img/img-for-brands/michael/michal7.webp`
        },
        {
            code:`MK8572`,
            name:`MICHAEL KORS MK8572 – NAM – QUARTZ (PIN)`,
            intro:`Mẫu Michael Kors MK8572 tạo nên sức hút thời trang nổi bật với mẫu dây đeo cao su tạo nên vẻ năng động tông màu đỏ trẻ trung, đồng hồ kiểu dáng 5 kim kèm theo 2 ô số nhỏ với tính năng Chronograph đầy tiện ích.`,
            price:7980000,
            brand:`MICHAEL KORS`,
            gender:`NAM`,
            img:`./product-img/img-for-brands/michael/michal8.webp`
        },
        {
            code:`MK4284`,
            name:`MICHAEL KORS MK4284 – NỮ – QUARTZ (PIN)`,
            intro:`Đồng hồ Michael Kors MK4284 với niềng làm bằng kim loại được mạ vàng, kim chỉ và gạch số mỏng gọn và sang trọng trên nền màu nâu đen vân mai rùa độc đáo, cùng dây quai màu vàng nâu đen tinh tế.`,
            price:7210000,
            brand:`MICHAEL KORS`,
            gender:`NỮ`,
            img:`./product-img/img-for-brands/michael/michal9.webp`
        },
        {
            // Chua xong
            code:`A3427.1161QZ`,
            name:`ADRIATICA A3427.1161QZ – NỮ – QUARTZ (PIN)`,
            intro:`Đồng hồ Adriatica A3427.1161QZ có mặt số tròn với viền kim loại được đính pha lê Swarovski quyến rũ, kim chỉ và vạch số thanh mãnh nổi bật trên nền số màu vàng sang trọng, dây đeo kim loại chắc chắn, tạo nên phụ kiện thời trang sang trọng, thanh lịch cho phái nữ.`,
            price:6210000,
            brand:`ADRIATICA`,
            gender:`NỮ`,
            img:`./product-img/img-for-brands/adriatica/ad3.webp`
        },
        {
            // Chua xong
            code:`A3603.5113QZ`,
            name:`ADRIATICA A3603.5113QZ – NỮ – QUARTZ (PIN)`,
            intro:`Đồng hồ Adriatica A3603.5113QZ có mặt số tròn nhỏ nhắn với nền số màu trắng trang nhã, kim chỉ và vạch số thanh mãnh nổi bật, dây đeo tay dạng vòng mắc vào nhau độc đáo, tạo nên phụ kiện thời trăng đẳng cấp quyến rũ, duyên dáng dành cho phái nữ.`,
            price:5490000,
            brand:`ADRIATICA`,
            gender:`NỮ`,
            img:`./product-img/img-for-brands/adriatica/ad4.webp`
        },
        {
            // Chua xong
            code:`A3694.51B3QZ`,
            name:`ADRIATICA A3694.51B3QZ – NỮ – QUARTZ (PIN)`,
            intro:`Đồng hồ Adriatica A3694.51B3QZ có viền kim loại được đính pha lê Swarovski quyến rũ, kim chỉ và vạch số phủ màu xanh nổi bật trên nền số màu trắng trang nhã, dây đeo kim loại màu bạc tạo nên phụ kiện thời trang sang trọng, thanh lịch cho phái nữ.`,
            price:6210000,
            brand:`ADRIATICA`,
            gender:`NỮ`,
            img:`./product-img/img-for-brands/adriatica/ad5.webp`
        },
        {
            // Chua xong
            code:`A3416.52B3QZ`,
            name:`ADRIATICA NAM – QUARTZ (PIN)`,
            intro:`Đồng hồ nam Adriatica A3416.52B3QZ đặc biệt nổi bật với dây da rắn trắng, mặt đồng hồ màu trắng viền được đính hạt, mặt kính Sapphire, thép không gỉ cao cấp, còn có 3 kim chỉ và 1 lịch ngày.`,
            price:5490000,
            brand:`ADRIATICA`,
            gender:`NAM`,
            img:`./product-img/img-for-brands/adriatica/ad6.webp`
        },
        {
            // Chua xong
            code:`A3584.5113Q`,
            name:`ADRIATICA NỮ – QUARTZ (PIN)`,
            intro:`Đồng hồ kiểu dáng lắc tay dành cho nữ Adriatica A3584.5113Q với chất liệu cao cấp sang trọng thép không gỉ, mặt đồng hồ vuông nhỏ có nền trắng, chữ số vạch đơn giản, còn có 2 kim chỉ tinh tế.`,
            price:5490000,
            brand:`ADRIATICA`,
            gender:`NỮ`,
            img:`./product-img/img-for-brands/adriatica/ad7.webp`
        },
        {
            // Chua xong
            code:`A3626.1153Q`,
            name:`ADRIATICA A3626.1153Q – NỮ – QUARTZ (PIN)`,
            intro:`Đồng hồ Adriatica A3626.1153Q có vỏ và dây đeo kim loại màu vàng sang trọng, kim chỉ và vạch số thon gọn có phủ phản quang nổi bật trên nền số màu trắng trang nhã, ô lịch ngày vị trí 3h tinh tế, tạo nên phụ kiện thời trang sang trọng, quyến rũ, thanh lịch cho phái nữ.`,
            price:5890000,
            brand:`ADRIATICA`,
            gender:`NỮ`,
            img:`./product-img/img-for-brands/adriatica/ad8.webp`
        },
        {
            // Chua xong
            code:`A8177.52B3CH`,
            name:`ADRIATICA NAM – QUARTZ (PIN)`,
            intro:`Đồng hồ dây da nam Adriatica A8177.52B3CH cao cấp với chất lượng thép không gỉ, dây da màu đen có vân, kiểu dáng thể thao 6 kim chỉ, chữ số màu xanh dễ đọc, còn có 1 lịch ngày.`,
            price:10530000,
            brand:`ADRIATICA`,
            gender:`NAM`,
            img:`./product-img/img-for-brands/adriatica/ad9.webp`
        },
        {
            code:`96A233`,
            name:`BULOVA 96A233 – NAM – KÍNH SAPPHIRE – QUARTZ (PIN)`,
            intro:`Mẫu Bulova 96A233 phiên bản cọc số la mã được tạo hình mỏng cách tân phong cách trẻ trung trên nền mặt số xanh size 38mm.`,
            price:9600000,
            brand:`BULOVA`,
            gender:`NAM`,
            img:`./product-img/img-for-brands/buvola/bu1.webp`
        },
        {
            code:`96L260`,
            name:`BULOVA 96L260 – NỮ – QUARTZ (PIN) – DÂY KIM LOẠI`,
            intro:`Mẫu Bulova 96L260 phiên bản sang trọng nổi bật với thiết kế đính các viên đá pha lê trên nền mặt số size 32mm phối tone màu xà cừ thời trang nối bật cho phái đẹp.`,
            price:12000000,
            brand:`BULOVA`,
            gender:`NỮ`,
            img:`./product-img/img-for-brands/buvola/bu2.webp`
        },
        {
            code:`97P136`,
            name:`BULOVA 97P136 – NỮ – KÍNH SAPPHIRE – QUARTZ (PIN)`,
            intro:`Ẩn bên dưới mặt kính Sapphire mang đến cho phái đẹp với thiết kế độc đáo đính kèm 4 viên kim cương trẻ trung sang trọng với phiên bản Bulova 97P136.`,
            price:24100000,
            brand:`BULOVA`,
            gender:`NỮ`,
            img:`./product-img/img-for-brands/buvola/bu3.webp`
        },
        {
            code:`98A157`,
            name:`BULOVA 98A157 – NAM – KÍNH SAPPHIRE – QUARTZ (PIN)`,
            intro:`Mẫu đồng hồ 98A157 mang đến một vẻ ngoài nam tính đến từ thương hiệu Bulova với kiểu dáng 5 kim kèm theo tính năng đo thời gian Chronograph phong cách thể thao, nhưng không kém phần trẻ trung với mẫu dây đeo demi.`,
            price:19200000,
            brand:`BULOVA`,
            gender:`NAM`,
            img:`./product-img/img-for-brands/buvola/bu4.webp`
        },
        {
            code:`96B289`,
            name:`BULOVA 96B289 – NAM – QUARTZ (PIN)`,
            intro:`Mẫu đồng hồ 96B289 thiết kế đến từ thương hiệu Bulova mang đến vẻ ngoài giản dị dành cho phái mạnh với kiểu dáng 3 kim, các vạch số được tạo nét mỏng của sự tinh tế trẻ trung trên mặt số được phối tone màu xanh.`,
            price:8500000,
            brand:`BULOVA`,
            gender:`NAM`,
            img:`./product-img/img-for-brands/buvola/bu5.webp`
        },
        {
            code:`96A184`,
            name:`BULOVA 96A184 – NAM – QUARTZ (PIN)`,
            intro:`Đồng hồ nam Bulova 96A184 kiểu dáng mặt đồng hồ to tròn phong cách nam tính, kim chỉ vơi chữ số la mã được thiết kế to rõ nổi bật trên nền màu đen mạnh mẽ, phối cùng với dây đeo bằng da màu nâu tạo vẻ lịch lãm cho phái mạnh.`,
            price:5500000,
            brand:`BULOVA`,
            gender:`NAM`,
            img:`./product-img/img-for-brands/buvola/bu6.webp`
        },
        {
            code:`97L139`,
            name:`BULOVA 97L139 – NỮ – QUARTZ (PIN)`,
            intro:`Đồng hồ Bulova 97L139 có niềng kim loại bo tròn mềm mại quanh nền số màu trắng trang nhã, kim chỉ và vạch số chỉ giờ được mạ màu vàng nổi bật.`,
            price:7300000,
            brand:`BULOVA`,
            gender:`NỮ`,
            img:`./product-img/img-for-brands/buvola/bu7.webp`
        },
        {
            code:`96A233`,
            name:`BULOVA 96A233 – NAM – KÍNH SAPPHIRE – QUARTZ (PIN)`,
            intro:`Mẫu Bulova 96A233 phiên bản cọc số la mã được tạo hình mỏng cách tân phong cách trẻ trung trên nền mặt số xanh size 38mm.`,
            price:9600000,
            brand:`BULOVA`,
            gender:`NAM`,
            img:`./product-img/img-for-brands/buvola/bu8.webp`
        },
        {
            code:`96R199`,
            name:`BULOVA 96R199 – NỮ – KÍNH SAPPHIRE – QUARTZ (PIN)`,
            intro:`Đồng hồ Bulova 96R199 với thiết kế thời trang quyến rũ, mặt đồng hồ nền trắng, kim chỉ và gạch số được phủ bạc, viền kim loại được làm bằng thép không gỉ và được đính 46 viên kim cương sang trọng.`,
            price:13300000,
            brand:`BULOVA`,
            gender:`NỮ`,
            img:`./product-img/img-for-brands/buvola/bu9.webp`
        },
        {
            code:`GA-1100-2ADR`,
            name:`G-SHOCK GA-1100-2ADR – NAM – QUARTZ (PIN)`,
            intro:`Đồng hồ G-Shock GA-1100-2ADR với thiết kế lấy cảm hứng từ hàng không, có chức năng Giờ Thế Giới giúp cho phi công biết múi giờ, còn có La Bàn Số giúp định hướng và đèn LED có độ chiếu sáng cao giúp nhìn rõ trong đêm.`,
            price:8576000,
            brand:`G-SHOCK`,
            gender:`NAM`,
            img:`./product-img/img-for-brands/g-shock/g8.webp`
        },
        {
            code:`GBD-200SM-1A6DR`,
            name:`G-SHOCK GBD-200SM-1A6DR – NAM – KÍNH CỨNG – QUARTZ (PIN)`,
            intro:`Mẫu G-Shock GBD-200SM-1A6DR phiên bản mặt số vuông ô số điện tử hiện thị đa chức năng, dây vỏ nhựa cùng với khả năng chịu nước lên đến 20atm.`,
            price:5441000,
            brand:`G-SHOCK`,
            gender:`NAM`,
            img:`./product-img/img-for-brands/g-shock/g9.webp`
        },
        {
            code:`L2.793.4.78.3`,
            name:`LONGINES L2.793.4.78.3 – NAM – KÍNH SAPPHIRE – AUTOMATIC (TỰ ĐỘNG)`,
            intro:`Đồng hồ Longines L2.793.4.78.3 với kiểu dáng nam tính, sang trọng và đẳng cấp với niềng kim loại bo tròn nền trắng mặt số, dây đeo da vân nâu lịch lãm.`,
            price:58937500,
            brand:`LONGINES`,
            gender:`NAM`,
            img:`./product-img/img-for-brands/longine/longine6.webp`
        },
        {
            code:`L4.821.4.11.2`,
            name:`LONGINES PRÉSENCE L4.821.4.11.2 – NAM – KÍNH SAPPHIRE – AUTOMATIC (TỰ ĐỘNG`,
            intro:`Đồng hồ Longines L4.821.4.11.2 phong cách giản dị với một trải nghiệm bô máy cơ dành cho nam, mặt số với tông màu trắng trang nhã cùng các chữ số la mã kết hợp cùng bộ dây da mang đậm phong cách cổ điển.`,
            price:27940000,
            brand:`LONGINES`,
            gender:`NAM`,
            img:`./product-img/img-for-brands/longine/longine7.webp`
        },
        {
            code:`L2.628.4.92.0`,
            name:`LONGINES MASTER L2.628.4.92.0 – NAM – KÍNH SAPPHIRE – AUTOMATIC (TỰ ĐỘNG)`,
            intro:`Mẫu Longines L2.628.4.92.0 thiết kế đơn giản chức năng 3 kim và 1 lịch, cọc vạch số mạ bạc tạo hình mỏng trên nền mặt số kích thước 38.5mm cùng với thiết kế họa tiết trải tia mỏng.`,
            price:57500000,
            brand:`LONGINES`,
            gender:`NAM`,
            img:`./product-img/img-for-brands/longine/longine8.webp`
        },
        {
            code:`L4.361.4.12.6`,
            name:`LONGINES LYRE L4.361.4.12.6 – NỮ – KÍNH SAPPHIRE – AUTOMATIC (TỰ ĐỘNG)`,
            intro:`Mẫu Longines L4.361.4.12.6 phiên bản trẻ trung với phần vỏ máy cơ được thiết kế siêu mỏng chỉ dày 8mm, vẻ ngoài đơn giản với chức năng 3 kim trên nền mặt số kích thước 30mm.`,
            price:35796000,
            brand:`LONGINES`,
            gender:`NỮ`,
            img:`./product-img/img-for-brands/longine/longine9.webp`
        },
        {
            code:`K8M216G6`,
            name:`CALVIN KLEIN K8M216G6 – NAM – QUARTZ (PIN)`,
            intro:`Mẫu Calvin Klein K8M216G6 kiểu dáng giản dị 3 kim cùng chi tiết vạch số tạo nét mỏng mạ vàng hồng tạo nên vẻ thời trang với thiết kế mỏng phần vỏ máy pin chỉ dày 7mm.`,
            price:6750000,
            brand:`CALVIN KLEIN (CK)`,
            gender:`NAM`,
            img:`./product-img/img-for-brands/ck/ck2.webp`
        },
        {
            code:`K5N2M526`,
            name:`CALVIN KLEIN K5N2M526 – NỮ – QUARTZ (PIN)`,
            intro:`Mẫu Calvin Klein K5N2M526 phiên bản dây đeo kiểu dây lắc tạo nên vẻ thời trang cho phái đẹp cùng với lối thiết kế đơn giản chức năng 2 kim trên nền mặt số trắng size 27mm.`,
            price:9630000,
            brand:`CALVIN KLEIN (CK)`,
            gender:`NỮ`,
            img:`./product-img/img-for-brands/ck/ck3.webp`
        },
        {
            code:`K9R31CD6`,
            name:`CALVIN KLEIN K9R31CD6 – NAM – QUARTZ (PIN)`,
            intro:`Mẫu Calvin Klein K9R31CD6 phiên bản dây đeo cao su với vẻ ngoài trẻ trung năng động với nền cọc số tạo hình dày dặn nổi bật trên phần vỏ viền bezel.`,
            price:5990000,
            brand:`CALVIN KLEIN (CK)`,
            gender:`NAM`,
            img:`./product-img/img-for-brands/ck/ck4.webp`
        },
        {
            code:`K9N115GH`,
            name:`CALVIN KLEIN K9N115GH – NAM – QUARTZ (PIN)`,
            intro:`Mẫu Calvin Klein K9N115GH sang trọng và lịch lãm với sự kết hợp giữa bộ dây nâu cùng vỏ máy kim loại mạ vàng với tone màu vàng nhạt đem đến vẻ trẻ trung cho phái mạnh.`,
            price:6530000,
            brand:`CALVIN KLEIN (CK)`,
            gender:`NAM`,
            img:`./product-img/img-for-brands/ck/ck5.webp`
        },
        {
            code:`K8Y236L6`,
            name:`CALVIN KLEIN K8Y236L6 – NỮ – QUARTZ (PIN)`,
            intro:`Mẫu Calvin Klein K8Y236L6 phiên bản mặt số lớn size 42mm phối cùng mẫu dây da trơn bản nhỏ tone màu trắng thời trang.`,
            price:6750000,
            brand:`CALVIN KLEIN (CK)`,
            gender:`NỮ`,
            img:`./product-img/img-for-brands/ck/ck6.webp`
        },
        {
            code:`SKW2775`,
            name:`SKAGEN SKW2775 – NỮ – QUARTZ (PIN)`,
            intro:`Mẫu Skagen SKW2775 thiết kế mỏng thời trang với phần vỏ máy pin chỉ 5mm tăng thêm vẻ đẹp quyến rũ cho phái đẹp với nền mặt số trắng xà cừ size 36mm.`,
            price:4340000,
            brand:`SKAGEN`,
            gender:`NỮ`,
            img:`./product-img/img-for-brands/skagen/cka1.webp`
        },
        {
            code:`SKW2372`,
            name:`SKAGEN SKW2372 – NỮ – QUARTZ (PIN)`,
            intro:`Đồng hồ Skagen SKW2372 có phong cách cổ điển khi mặt số tròn kết hợp với dây đeo da màu đen quyến rũ, nền số màu đen sang trọng, nổi bật là 2 kim chỉ được dát mỏng tinh tế, trung tâm mặt số có lịch thể hiện chu kỳ hoạt động của mặt trăng.`,
            price:6650000,
            brand:`SKAGEN`,
            gender:`NỮ`,
            img:`./product-img/img-for-brands/skagen/cka2.webp`
        },
        {
            code:`SKW2150`,
            name:`SKAGEN SKW2150 – NỮ – QUARTZ (PIN)`,
            intro:`Đồng hồ nữ Skagen SKW2150 có vỏ kim loại bằng thép không gỉ mạ vàng sang trọng, kim chỉ và vạch số được làm thanh mảnh nhẹ nhàng, dây đeo kim loại mạ vàng phiên bản dây lưới.`,
            price:4950000,
            brand:`SKAGEN`,
            gender:`NỮ`,
            img:`./product-img/img-for-brands/skagen/cka3.webp`
        },
        {
            code:`SKW6846`,
            name:`SKAGEN SKW6846 – NAM – QUARTZ (PIN)`,
            intro:`Mẫu Skagen SKW6846 mẫu dây da nâu phiên bản da trơn phong cách trẻ trung, vỏ máy pin mạ bạc với thiết kế mỏng chỉ dày 6mm.`,
            price:4120000,
            brand:`SKAGEN`,
            gender:`NAM`,
            img:`./product-img/img-for-brands/skagen/cka4.webp`
        },
        {
            code:`SKW3025`,
            name:`SKAGEN SKW3025 – NỮ – QUARTZ (PIN)`,
            intro:`Mẫu Skagen SKW3025 dây đeo phiên bản dây lưới phong cách thời trang, thiết kế đính 12 viên pha lê tương ứng với 12 múi giờ trên nền mặt số phù hợp cho các phái đẹp có phần cổ tay nhỏ kich thước 26mm.`,
            price:3900000,
            brand:`SKAGEN`,
            gender:`NỮ`,
            img:`./product-img/img-for-brands/skagen/cka5.webp`
        },
        {
            code:`SKW6787`,
            name:`SKAGEN SKW6787 – NAM – QUARTZ (PIN)`,
            intro:`Mẫu Skagen SKW6787 dây đeo phiên bản dây lưới phong cách thời trang kết hợp cùng lối thiết kế đơn giản chức năng 3 kim trên nền mặt số xanh kích thước 40mm.`,
            price:4840000,
            brand:`SKAGEN`,
            gender:`NAM`,
            img:`./product-img/img-for-brands/skagen/cka6.webp`
        },
        {
            code:`SKW6785`,
            name:`SKAGEN SKW6785 – NAM – QUARTZ (PIN)`,
            intro:`Mẫu Skagen SKW6785 dây da nâu phiên bản dây da trơn phong cách thời trang kết hợp cùng lối thiết kế đơn giản chức năng 3 kim trên nền mặt số xám kích thước 40mm.`,
            price:4210000,
            brand:`SKAGEN`,
            gender:`NAM`,
            img:`./product-img/img-for-brands/skagen/cka7.webp`
        },
        {
            code:`SKW6739`,
            name:`SKAGEN SKW6739 – NAM – QUARTZ (PIN)`,
            intro:`Mẫu Skagen SKW6739 dây da phiên bản dây da trơn phong cách thời trang kết hợp cùng lối thiết kế đơn giản chức năng 3 kim trên nền mặt số xanh kích thước 40mm.`,
            price:5460000,
            brand:`SKAGEN`,
            gender:`NAM`,
            img:`./product-img/img-for-brands/skagen/cka8.webp`
        },
        {
            code:`SKW6818`,
            name:`SKAGEN SKW6818 – NAM – QUARTZ (PIN)`,
            intro:`Mẫu Skagen SKW6818 phiên bản dây lưới tone vàng hồng thời trang, các chi tiết kim chỉ cùng cọc vạch số được phủ dạ quang giúp người dùng dễ quan sát trong điều kiện thiếu sáng.`,
            price:5150000,
            brand:`SKAGEN`,
            gender:`NAM`,
            img:`./product-img/img-for-brands/skagen/cka9.webp`
        },
        {
            code:`377DMK-V`,
            name:`OGIVAL 377DMK-V – NAM`,
            intro:`Mẫu Ogival 377DMK-V phiên bản sang trọng với thiết kế đính các viên đá pha lê trên nền mặt số size 40mm cùng với thiết kế mạ vàng nổi bật trên phần dây vỏ đồng hồ.`,
            price:16860000,
            brand:`OGIVAL`,
            gender:`NAM`,
            img:`./product-img/img-for-brands/ogival/og1.webp`
        },
        {
            code:`350-1LS-T`,
            name:`OGIVAL 350-1LS-T – NỮ`,
            intro:`Mẫu Ogival 350-1LS-T phiên bản mạ bạc trên chi tiết dây vỏ đồng hồ cùng với thiết kế đơn giản trẻ trung chức năng 3 kim hiện thị trên nền mặt số trắng size 30mm.`,
            price:6580000,
            brand:`OGIVAL`,
            gender:`NỮ`,
            img:`./product-img/img-for-brands/ogival/og2.webp`
        },
        {
            code:`350-1LS-T`,
            name:`OGIVAL 350-1LS-T – NỮ`,
            intro:`Mẫu Ogival 350-1LS-T phiên bản mạ bạc trên chi tiết dây vỏ đồng hồ cùng với thiết kế đơn giản trẻ trung chức năng 3 kim hiện thị trên nền mặt số trắng size 30mm.`,
            price:6580000,
            brand:`OGIVAL`,
            gender:`NỮ`,
            img:`./product-img/img-for-brands/ogival/og3.webp`
        },
        {
            code:`C4363/2`,
            name:`CANDINO NAM – QUARTZ (PIN)`,
            intro:`Đồng hồ Candino C4363/2 với chất liệu cao cấp dành cho nam, vỏ và dây đeo được làm bằng thép không gỉ mạ vàng, mặt kính Sapphire chịu lực chống trầy, mặt nền trắng có chạm rổ còn có 2 kim chỉ.`,
            price:6730000,
            brand:`CANDINO`,
            gender:`NAM`,
            img:`./product-img/img-for-brands/cadino/cadino1.webp`
        },
        {
            code:`C4726/1`,
            name:`CANDINO C4726/1 – NAM – KÍNH SAPPHIRE – QUARTZ (PIN)`,
            intro:`Mẫu Candino C4726/1 vẻ ngoài đơn giản chức năng 2 kim và 1 lịch hiện thị trên nền mặt số kích thước 39mm cùng với thiết kế trải tia nhẹ tạo nên phong cách trẻ trung.`,
            price:5240000,
            brand:`CANDINO`,
            gender:`NAM`,
            img:`./product-img/img-for-brands/cadino/cadino2.webp`
        },
        {
            code:`C4621/1`,
            name:`CANDINO C4621/1 – NAM – QUARTZ (PIN)`,
            intro:`Mẫu Candino C4621/1 phiên bản mặt kính Sapphire size 41mm, mặt số phối tone màu trắng cùng với thiết kế họa tiết trải tia nhẹ tạo nên phong cách trẻ trung.`,
            price:8100000,
            brand:`CANDINO`,
            gender:`NAM`,
            img:`./product-img/img-for-brands/cadino/cadino3.webp`
        },
        {
            code:`C4621/4`,
            name:`CANDINO C4621/4 – NAM – QUARTZ (PIN)`,
            intro:`Mẫu Candino C4621/4 phiên bản mặt kính Sapphire size 41mm, mặt số phối tone màu đen làm nền nổi bật lên các chi tiết kim chỉ cùng cọc vạch số màu vàng hồng.`,
            price:8100000,
            brand:`CANDINO`,
            gender:`NAM`,
            img:`./product-img/img-for-brands/cadino/cadino4.webp`
        },
        {
            code:`C4621/3`,
            name:`CANDINO C4621/3 – NAM – QUARTZ (PIN)`,
            intro:`Mẫu Candino C4621/3 phiên bản mặt số phối tone màu xanh thời trang nổi bật sự trẻ trung cùng với thiết kế đơn giản chức năng 3 kim`,
            price:8100000,
            brand:`CANDINO`,
            gender:`NAM`,
            img:`./product-img/img-for-brands/cadino/cadino5.webp`
        },
        {
            code:`C4696/1`,
            name:`CANDINO C4696/1 – NỮ – KÍNH SAPPHIRE`,
            intro:`Mẫu Candino C4696/1 kim chỉ xanh tone màu thời trang sang trọng cho phái đẹp với thiết kế đính các viên pha lê lấp lánh trên nền mặt số size 30mm.`,
            price:8770000,
            brand:`CANDINO`,
            gender:`NỮ`,
            img:`./product-img/img-for-brands/cadino/cadino6.webp`
        },
        {
            code:`C4621/2`,
            name:`CANDINO C4621/2 – NAM – QUARTZ (PIN)`,
            intro:`Mẫu Candino C4621/2 tạo nét thời trang với chi tiết vạch số được tạo hình mỏng và được phối tông màu xanh trẻ trung nam tính với mẫu dây đeo kim loại bạc đầy tinh tế.`,
            price:8100000,
            brand:`CANDINO`,
            gender:`NAM`,
            img:`./product-img/img-for-brands/cadino/cadino7.webp`
        },
        {
            code:`C4616/2`,
            name:`CANDINO C4616/2 – NAM – KÍNH SAPPHIRE – QUARTZ (PIN)`,
            intro:`Mẫu Candino C4616/2 kích thước tròn to dày dặn nam tính, phong cách giản dị với các vạch số thiết kế mỏng tinh tế trên nền mặt kính Sapphire, ấn tượng với vỏ viền ngoài vàng hồng trẻ trung sang trọng.`,
            price:9790000,
            brand:`CANDINO`,
            gender:`NAM`,
            img:`./product-img/img-for-brands/cadino/cadino8.webp`
        },
        {
            code:`C4618/3`,
            name:`CANDINO C4618/3 – NAM – KÍNH SAPPHIRE – QUARTZ (PIN)`,
            intro:`Mẫu Candino C4618/3 nổi bật với nền mặt kính chất liệu kính Sapphire, các vạch số thiết kế kiểu dáng mỏng 1 cách tinh tế trên nền mặt số tông màu trắng trang nhã, phối cùng bô dây đeo bằng da màu đen đầy lịch lãm.`,
            price:6750000,
            brand:`CANDINO`,
            gender:`NAM`,
            img:`./product-img/img-for-brands/cadino/cadino9.webp`
        },
        {
            code:`3600455`,
            name:`MOVADO 3600455 – NAM – QUARTZ (PIN)`,
            intro:`Mẫu Movado 3600455 dây da phiên bản da trơn phối tone màu xám phong cách thời trang phối cùng với lối thiết kế tối giản chức năng 2 kim`,
            price:13200000,
            brand:`MOVADO`,
            gender:`NAM`,
            img:`./product-img/img-for-brands/movado/movado2.webp`
        },
        {
            code:`0607114`,
            name:`MOVADO 0607114 – NỮ – KÍNH SAPPHIRE – QUARTZ (PIN)`,
            intro:`Mẫu Movado 0607114 dây đeo kim loại phiên bản dây demi phối tone màu vàng hồng thời trang phối cùng nền mặt số trắng xà cừ size 28mm.`,
            price:39200000,
            brand:`MOVADO`,
            gender:`NỮ`,
            img:`./product-img/img-for-brands/movado/movado3.webp`
        },
        {
            code:`3600201`,
            name:`MOVADO 3600201 – NỮ – QUARTZ (PIN)`,
            intro:`Đồng hồ Movado 3600201 có vỏ và dây đeo kim loại được phủ màu vàng sang trọng, logo mặt trời vị trí 12h được đính pha lê nổi bật trên nền số màu vàng sang trọng, tạo nên phong cách thời trang.`,
            price:19100000,
            brand:`MOVADO`,
            gender:`NỮ`,
            img:`./product-img/img-for-brands/movado/movado4.webp`
        },
        {
            code:`3600086`,
            name:`MOVADO 3600086 – NỮ – QUARTZ (PIN)`,
            intro:`Đồng hồ Movado 3600086 có vỏ và dây đeo kim loại bằng chất liệu thép không gỉ cao cấp, nền số màu đồng quyến rũ với kim chỉ được làm mỏng tinh tế, logo chấm tròn được đính pha lê sang trọng, tạo nên vẻ đẹp kiêu sa dành riêng cho phái nữ.`,
            price:22300000,
            brand:`MOVADO`,
            gender:`NỮ`,
            img:`./product-img/img-for-brands/movado/movado5.webp`
        },
        {
            // Chua xong
            code:`0606916`,
            name:`MOVADO 0606916 – NAM – KÍNH SAPPHIRE – AUTOMATIC (TỰ ĐỘNG)`,
            intro:`Đồng hồ nam Movado 0606916 có mặt số tròn truyền thống với viền mỏng tinh tế, kim chỉ và logo dấu chấm đặc trưng được phủ vàng nổi bật trên nền số màu đen mạnh mẽ, dây đeo demi đem đến nét thời trang sang trọng.`,
            price:40500000,
            brand:`MOVADO`,
            gender:`NAM`,
            img:`./product-img/img-for-brands/movado/movado6.webp`
        },
        {
            code:`3680016`,
            name:`MOVADO 3680016 – NỮ – KÍNH SAPPHIRE – QUARTZ (PIN)`,
            intro:`Vẻ ngoài giản dị thanh lịch của mẫu đồng hồ Movado 3680016 gợi lên hình dáng của sự sang trọng với tổng thể vỏ máy cùng dây đeo bao phủ tông màu vàng hồng tôn lên một vẻ đẹp thời trang cuốn hút cho phái đẹp.`,
            price:32000000,
            brand:`MOVADO`,
            gender:`NỮ`,
            img:`./product-img/img-for-brands/movado/movado7.webp`
        },
        {
            code:`0606114`,
            name:`MOVADO 0606114 – NAM – AUTOMATIC (TỰ ĐỘNG)`,
            intro:`Mẫu Movado 0606114 mặt đồng hồ kích thước to tròn với trải nghiệm bô máy cơ dành cho nam, thiết kế theo phong cách giản dị chức năng lịch ngày sắp ở vị trí múi 6 giờ tinh tế trên nền mặt số tone màu đen nam tính.`,
            price:44800000,
            brand:`MOVADO`,
            gender:`NAM`,
            img:`./product-img/img-for-brands/movado/movado8.webp`
        },
        {
            code:`3680012`,
            name:`MOVADO 3680012 – NỮ – KÍNH SAPPHIRE – QUARTZ (PIN)`,
            intro:`Đồng hồ nữ Movado 3680012 với kim chỉ thiết kế thanh mảnh nhẹ nhàng, có vỏ kim loại bằng thép không gỉ màu bạc sang trọng, kết hợp dây đeo kim loại tạo nên vẻ đẹp kiêu sa cho phái nữ.`,
            price:25600000,
            brand:`MOVADO`,
            gender:`NỮ`,
            img:`./product-img/img-for-brands/movado/movado9.webp`
        },
        
        {
            code:`K8N2314S`,
            name:`CALVIN KLEIN K8N2314S – NỮ – QUARTZ (PIN)`,
            intro:`Mẫu Calvin Klein K8N2314S phiên bản dây đeo thời trang nữ tính với kiểu dây lắc mạ bạc, mặt số size 32mm đơn giản 2 kim nổi bật với thiết kế đính đá pha lê.`,
            price:11700000,
            brand:`CALVIN KLEIN (CK)`,
            gender:`NỮ`,
            img:`./product-img/img-for-brands/ck/ck7.webp`
        },
        {
            code:`K6K33B46`,
            name:`CALVIN KLEIN K6K33B46 – NỮ – QUARTZ (PIN)`,
            intro:`Mẫu Calvin Klein K6K33B46 các chi tiết vạch số tạo nét mỏng được phối tone màu vàng hồng trẻ trung trên nền mặt số size nhỏ 30mm với thiết kế 3 kim đơn giản cho phái đẹp.`,
            price:6750000,
            brand:`CALVIN KLEIN (CK)`,
            gender:`NỮ`,
            img:`./product-img/img-for-brands/ck/ck8.webp`
        },
        {
            code:`K4D2114V`,
            name:`CALVIN KLEIN K4D2114V – NAM – QUARTZ (PIN)`,
            intro:`Mẫu Calvin Klein K4D2114V mặt số đen với kích thước 38mm kiểu dáng 2 kim phong cách đơn giản dành cho phái mạnh, cùng với mẫu dây vỏ kim loại mạ bạc.`,
            price:4930000,
            brand:`CALVIN KLEIN (CK)`,
            gender:`NAM`,
            img:`./product-img/img-for-brands/ck/ck9.webp`
        },
        {
            code:`LE1157`,
            name:`FOSSIL HARRY POTTER LIMITED EDITION LE1157 – NAM – AUTOMATIC (CƠ TỰ ĐỘNG)`,
            intro:`Mẫu Fossil LE1157 phiên bản giới hạn dành tặng các Potterhead với phần dây vỏ kim loại mạ vàng, điểm nổi bật với phiên bản này với thiết kế mặt kính chất liệu kính sapphire kích thước lớn 43mm.`,
            price:14280000,
            brand:`FOSSIL`,
            gender:`NAM`,
            img:`./product-img/img-for-brands/fossil/fs5.webp`
        },
        {
            code:`LE1158`,
            name:`FOSSIL HARRY POTTER LIMITED EDITION LE1158 – NAM – QUARTZ (PIN)`,
            intro:`Mẫu Fossil LE1158 phiên bản giới hạn dành tặng các fan chân chính nhà Gryffindor với mẫu đeo chất liệu bằng dây vải thời trang, tông đỏ đậm chất Hogwarts, kết hợp cùng vỏ máy kim loại mạ tone màu vàng nhạt đầy tinh tế.`,
            price:5740000,
            brand:`FOSSIL`,
            gender:`NAM`,
            img:`./product-img/img-for-brands/fossil/fs6.webp`
        },
        {
            code:`LE1159`,
            name:`FOSSIL HARRY POTTER LIMITED EDITION LE1159 – NAM – QUARTZ (PIN)`,
            intro:`Mẫu Fossil LE1159 phiên bản giới hạn dành tặng các fan chân chính nhà Hufflepuff với mẫu đeo chất liệu bằng dây vải thời trang, tông vàng đậm chất Hogwarts, kết hợp cùng vỏ máy kim loại mạ tone đen đầy tinh tế.`,
            price:5740000,
            brand:`FOSSIL`,
            gender:`NAM`,
            img:`./product-img/img-for-brands/fossil/fs7.webp`
        },
        {
            code:`FS5961`,
            name:`FOSSIL FS5961 – NAM – QUARTZ (PIN)`,
            intro:`Mẫu Fossil FS5961 các chi tiết kim chỉ cùng các cọc chấm tròn tạo hình dày dặn phủ dạ quang trên nền mặt số lớn kích thước 42mm.`,
            price:4320000,
            brand:`FOSSIL`,
            gender:`NAM`,
            img:`./product-img/img-for-brands/fossil/fs8.webp`
        },
        {
            code:`ES5165`,
            name:`FOSSIL JACQUELINE ES5165 – NỮ – QUARTZ (PIN)`,
            intro:`Mẫu Fossil ES5165 các chi tiết kim chỉ cùng cọc vạch số được tạo hình mỏng mạ tone màu vàng hồng thời trang trên nền mặt số trắng xà cừ kích thước 36mm.`,
            price:4890000,
            brand:`FOSSIL`,
            gender:`NỮ`,
            img:`./product-img/img-for-brands/fossil/fs9.webp`
        }
    ];
    
    let miniBrands = document.querySelector(".brands-danh-muc");
    console.log(miniBrands);
    let strSmallLogo = ``;
    brandsArr.forEach((brand)=>{
        strSmallLogo+=`<p class="hover08">
        <a href="product.html" target="_blank" rel="noopener noreferrer">
            <img src="${brand.small_logo}" alt="${brand.brand}" class="hover08 alignleft wp-image-29288 size-full">
        </a>
    </p>`
    });
    miniBrands.innerHTML=strSmallLogo;

    let checkoptionsBrands = document.querySelector(".row.brand-list");
    console.log(checkoptionsBrands);
    let strOptBrands = ``;
    brandsArr.forEach((option)=>{
        strOptBrands+=`<div class="col l-6 m-6 c-6 brand-option" style="text-align: left;">
        <input type="radio" name="optionBrands" value = "${option.acronym}" id="" class="opstionsBrands">
        <label for="${option.acronym}"  style="text-transform: lowercase; ">${option.acronym}</label>
    </div>`
    });
    checkoptionsBrands.innerHTML=strOptBrands;
    let CurrentARR = [1,2,3,4,5,6,7,8]; 
    function asd(){
        alert("ahihi");
    };
    let imgBrands = document.getElementById("img-intro-products");
    console.log(imgBrands);
    var format;
    var brandsCurrent;
    var discMain = document.getElementById("disc-for-brands");
    console.log(discMain);
    var arrTxt = document.querySelectorAll(".opstionsBrands");
    console.log(arrTxt);
    let ArrProductShows = []; //Mảng show theo yêu cầu


    function checked(){
        arrTxt.forEach((radio,index)=>{
            if(radio.checked == true){
                format = index;
                // console.log(index);
                console.log(format);
            }
        });
    }

    function changesBanner(){
        if(Number.isNaN(format)==false){
            imgBrands.src = brandsArr[format].banner;
            discMain.innerHTML = brandsArr[format].disc;
            brandsCurrent = brandsArr[format].brand; 
        }
    }
    function changeProductShow(){
        ArrProductShows = [];
        productDetail.forEach((detail)=>{
            if(detail.brand == brandsCurrent){
                ArrProductShows.push(detail);
            }
        })
        console.log(ArrProductShows);
        ArrProductShows.forEach((item)=>{
            listChange.push(item);
        })
    };
    var productString = "";
    //Khai Báo mảng ô chứa sản phẩm
    let productContainer = document.querySelector(".row.product-list#productCnt");
    console.log(productContainer);
    var productString = "";
    function newProduct(){
        console.log(ArrProductShows);
        productString = ""
        ArrProductShows.forEach((product)=>{
            productString+=`
            <div class="col l-4 m-4 c-6 product-item">
                                <div class="box-img">
                                    <a href="#" aria-label="${product.brand}">
                                        <img  src="${product.img}" alt="" >
                                    </a>
                                    <div class="box-text text-center" style="height: 122.287px;">
                                        <div class="title-wrapper">
                                            <p  style="height: 40.7875px;">
                                                <a href="" class="product__link">${product.name}</a>
                                            </p>
                                        </div>
                                        <div class="price-wrapper" style="height: 48.4px;">
                                            <div class="star-rating star-rating--inline" role="img">
                                                <i class="fa-solid fa-star" style="color: #dd0e0e;"></i>
                                                <i class="fa-solid fa-star" style="color: #dd0e0e;"></i>
                                                <i class="fa-solid fa-star" style="color: #dd0e0e;"></i>
                                                <i class="fa-solid fa-star" style="color: #dd0e0e;"></i>
                                                <i class="fa-solid fa-star" style="color: #dd0e0e;"></i>
                                            </div>
                                            <span class="price">
                                                <span class="amount">
                                                    ${product.price.toLocaleString()}
                                                    <span>
                                                        VND
                                                    </span>
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                              </div>`
        });
        productContainer.innerHTML= productString;
    } 
    let listBrandsOpts = document.querySelectorAll(".brand-option");
    console.log(listBrandsOpts);
    var productCart = document.querySelectorAll(".col.product-item"); //Product Cart
    console.log(productCart);
    let listChange = [];
    console.log(listChange);

    // productDetail.forEach((detail)=>{
    //     ArrProductShows.push(detail);
    // });
    function firstProduct(){
        for(let i=0;i<9;i++){
            ArrProductShows.push(productDetail[i]);
        }
    };
    firstProduct();
    newProduct();
    listChange = [];
    ArrProductShows.forEach((item)=>{
        listChange.push(item);
    });
    clickProduct();
    var clickNext = 0;
    // var clickBack = 0;
    // let pagi = document.querySelectorAll();
    //New product với page-number
    let btnChange1 = document.getElementById("click_change_1");
    console.log(btnChange1);
    let btnChange2 = document.getElementById("click_change_2");
    console.log(btnChange2);
    let pageNumberCurr = document.querySelector(".page-numbers .current");
    console.log(pageNumberCurr);
    let backPageNumber = document.querySelector(".back.page-numbers");
    console.log(backPageNumber);
    let nextPageNumber = document.querySelector(".next.page-numbers");
    console.log(nextPageNumber);
    let lastNumberPage = document.querySelector(".page-numbers-last");
    console.log(lastNumberPage);

    function showBackBtn(){
        if(clickNext===0){
            backPageNumber.style =`display:none;`;
        }else{
            backPageNumber.style=`display:block;`
        }
    }
    lastNumberPage.addEventListener("click",()=>{
        ArrProductShows=[];
        for(let i=((clickNext*9)+0);i<((clickNext*9)+9);i++){
            ArrProductShows.push(productDetail[i]);
        }
        listChange = [];
        ArrProductShows.forEach((item)=>{
            listChange.push(item);
        });
        newProduct();
        var productCart = document.querySelectorAll(".col.product-item");
        console.log(productCart);
        clickProduct();
    });
    btnChange1.addEventListener("click",()=>{
        ArrProductShows=[];
        clickNext++;
        for(let i=((clickNext*9)+0);i<((clickNext*9)+9);i++){
            ArrProductShows.push(productDetail[i]);
        }
        
        listChange = [];
        ArrProductShows.forEach((item)=>{
            listChange.push(item);
        });
        newProduct();
        showBackBtn();
        var productCart = document.querySelectorAll(".col.product-item");
        console.log(productCart);
        clickProduct();
        btnChange1.innerHTML= parseInt(clickNext+2);
        btnChange2.innerHTML= parseInt(clickNext+3);
        pageNumberCurr.style = `display:none;`
        
    });
    nextPageNumber.addEventListener("click",()=>{
        ArrProductShows=[];
        clickNext++;
        for(let i=((clickNext*9)+0);i<((clickNext*9)+9);i++){
            ArrProductShows.push(productDetail[i]);
        }
        ArrProductShows.forEach((item)=>{
            listChange.push(ArrProductShows[i]);
        })
        newProduct();
        showBackBtn();
        var productCart = document.querySelectorAll(".col.product-item");
        console.log(productCart);
        clickProduct();
        btnChange1.innerHTML= parseInt(clickNext+2);
        btnChange2.innerHTML= parseInt(clickNext+3);
        pageNumberCurr.style = `display:none;`
    });
    btnChange2.addEventListener("click",()=>{
        ArrProductShows=[];
        clickNext+=2;
        for(let i=((clickNext*9)+0);i<((clickNext*9)+9);i++){
            ArrProductShows.push(productDetail[i]);
        }
        
        ArrProductShows.forEach((item)=>{
            listChange.push(item);
        })
        newProduct();
        showBackBtn();
        var productCart = document.querySelectorAll(".col.product-item");
        console.log(productCart);
        clickProduct();
        btnChange1.innerHTML= parseInt(clickNext+2);
        btnChange2.innerHTML= parseInt(clickNext+3);
    });

    backPageNumber.addEventListener("click",()=>{
        ArrProductShows=[];
        clickNext--;
        if(clickNext==1){
            pageNumberCurr.style = `display:block;`
        }
        for(let i=((clickNext*9)+0);i<((clickNext*9)+9);i++){
            ArrProductShows.push(productDetail[i]);
        }
        
        ArrProductShows.forEach((item)=>{
            listChange.push(ArrProductShows[i]);
        })
        newProduct();
        var productCart = document.querySelectorAll(".col.product-item");
        console.log(productCart);
        clickProduct();
        showBackBtn();

        btnChange1.innerHTML= parseInt(clickNext+2);
        btnChange2.innerHTML= parseInt(clickNext+3);
    })
    showBackBtn();
    var productCart = document.querySelectorAll(".col.product-item");
        console.log(productCart);
        clickProduct();
    //Tạo mảng chứa products

    
    console.log(listBrandsOpts);
    listBrandsOpts.forEach((op)=>{
        op.addEventListener("click",()=>{
            checked();
            changesBanner();
            changeProductShow();
            newProduct();
            productCart = document.querySelectorAll(".col.product-item");
            console.log(productCart);
            listChange = [];
            ArrProductShows.forEach((item)=>{
                listChange.push(item);
            })
            clickProduct();
        });
    });
   clickProduct();
    //add sự kiện đồng hồ nam và nữ
    let maleProduct = document.getElementById("bannerDongHoNam");  //Banner đồng hồ nam
    console.log(maleProduct)
    maleProduct.addEventListener("click",()=>{
        window.localStorage.setItem("gender","NAM");
        window.href("product.html");
    })
    let femaleProduct = document.getElementById("bannerDongHoNu");  //Banner đồng hồ nữ
    console.log(femaleProduct);
    femaleProduct.addEventListener("click",()=>{
        window.localStorage.setItem("gender","NỮ");
        // window.href("product.html");
    });
    let genderBySTR = window.localStorage.getItem("gender");
    if(genderBySTR == 'NAM'){
        genderArr.forEach((gender)=>{
            if(gender.gender == 'NAM'){
                imgBrands.src = gender.banner;
                discMain.innerHTML = gender.disc;
                productString = "";
                ArrProductShows = [];
                productDetail.forEach((detail)=>{
                    if(detail.gender == 'NAM'){
                        ArrProductShows.push(detail);
                    }
                });
                
            }
        }); 
        listChange = [];
        ArrProductShows.forEach((item)=>{
            listChange.push(item);
        });
        newProduct();
        var productCart = document.querySelectorAll(".col.product-item");
        console.log(productCart);
        clickProduct();
        window.localStorage.removeItem("gender");
    }else if(genderBySTR == 'NỮ'){
        genderArr.forEach((gender)=>{
            if(gender.gender == 'NỮ'){
                imgBrands.src = gender.banner;
                discMain.innerHTML = gender.disc;
                productString = "";
                ArrProductShows = [];
                productDetail.forEach((detail)=>{
                    if(detail.gender == 'NỮ'){
                        ArrProductShows.push(detail);
                    }
                });
                
            }
        });
        listChange = [];
        ArrProductShows.forEach((item)=>{
            listChange.push(item);
        });
        newProduct();
        var productCart = document.querySelectorAll(".col.product-item");
        console.log(productCart);
        clickProduct();
        window.localStorage.removeItem("gender");
    }
  
   // Tạo sự kiện với thẻ hover08
   let brandsHover08 = document.querySelectorAll(".brands-danh-muc p.hover08");
   console.log(brandsHover08);
   brandsHover08.forEach((banner,index)=>{
    banner.addEventListener("click",()=>{
        window.localStorage.setItem("brands",brandsArr[index].brand);
        window.localStorage.setItem("indexShow",index);
        // window.href("product.html");
    })
   })
   
   let BrandLocal = window.localStorage.getItem("brands");
   console.log(BrandLocal);
   if(BrandLocal){
        brandsArr.forEach((brand)=>{
            if(brand.brand == BrandLocal){
                imgBrands.src = brand.banner;
                discMain.innerHTML = brand.disc;
            }
        })
        var indexInSTR = window.localStorage.getItem("indexShow");
        arrTxt.forEach((checkbox)=>{
            checkbox.checked = false;
        })
        var convertNodelist = Array.from(arrTxt);
        convertNodelist[indexInSTR].checked = true;
        
        productString = "";
        ArrProductShows = [];
        productDetail.forEach((product)=>{
            if(BrandLocal == product.brand){
                ArrProductShows.push(product);
            }
        });
        listChange = [];
        ArrProductShows.forEach((item)=>{
            listChange.push(item);
        });
        // Khong biet bam o day
        newProduct();
        var productCart = document.querySelectorAll(".col.product-item");
        console.log(productCart);
        listChange = [];
        ArrProductShows.forEach((item)=>{
            listChange.push(item);
        });
        clickProduct();
        window.localStorage.removeItem("brands");
        window.localStorage.removeItem("indexShow");
   }
   let infoProduct;     //thông tin sản phẩm
    function clickProduct(){
        // newProduct();
        var productCart = document.querySelectorAll(".col.product-item");
        console.log(productCart);
        // productCart.forEach((cart,index)=>{
        //     cart.addEventListener("click",()=>{
        //         let infoProduct = ArrProductShows[index].code;
        //         console.log(infoProduct);
        //         // window.localStorage.clear("productShow");
        //         window.localStorage.setItem("productShow",infoProduct);
        //         location.href = "cart-detail.html"
        //     })
        // });
        for(let count=0;count<productCart.length;count++){
            productCart[count].addEventListener("click",()=>{
                console.log(count);
                console.log(listChange);
                let infoProduct = listChange[count].code;
                console.log(infoProduct);
                window.localStorage.setItem("productShow",infoProduct);
                location.href = "cart-detail.html"
            })
        }
    }
    // Hiện sản phẩm theo yêu cầu về số tiền
    let priceRequest = document.querySelectorAll(".check-request-price");
    function checkRequestPrice(){
        ArrProductShows = [];
        priceRequest.forEach((request)=>{
            request.addEventListener("click",()=>{
                
                    if(priceRequest[0].checked == true){
                        productDetail.forEach((detail)=>{
                            if(detail.price<=2000000){
                                ArrProductShows.push(detail);
                            }
                        })
                    }
                     if(priceRequest[1].checked == true){
                        productDetail.forEach((detail)=>{
                            if(detail.price>2000000 && detail.price<=4000000){
                                ArrProductShows.push(detail);
                            }
                        })
                    }
                    if(priceRequest[2].checked == true){
                        productDetail.forEach((detail)=>{
                            if(detail.price>4000000 && detail.price<=6000000){
                                ArrProductShows.push(detail);
                            }
                        })
                    }
                    if(priceRequest[3].checked == true){
                        productDetail.forEach((detail)=>{
                            if(detail.price>6000000 && detail.price<=8000000){
                                ArrProductShows.push(detail);
                            }
                        })
                    }
                    if(priceRequest[4].checked == true){
                        productDetail.forEach((detail)=>{
                            if(detail.price>8000000 && detail.price<=10000000){
                                ArrProductShows.push(detail);
                            }
                        })
                    }
                    if(priceRequest[5].checked == true){
                        productDetail.forEach((detail)=>{
                            if(detail.price>10000000 && detail.price<=20000000){
                                ArrProductShows.push(detail);
                            }
                        })
                    }
                    if(priceRequest[6].checked == true){
                        productDetail.forEach((detail)=>{
                            if(detail.price>20000000 && detail.price<=30000000){
                                ArrProductShows.push(detail);
                            }
                        })
                    }
                    if(priceRequest[7].checked == true){
                        productDetail.forEach((detail)=>{
                            if(detail.price>30000000 && detail.price<=40000000){
                                ArrProductShows.push(detail);
                            }
                        })
                    }
                    if(priceRequest[8].checked == true){
                        productDetail.forEach((detail)=>{
                            if(detail.price>40000000){
                                ArrProductShows.push(detail);
                            }
                        })
                    }
                    newProduct();
                var productCart = document.querySelectorAll(".col.product-item");
                console.log(productCart);
                ArrProductShows.forEach((item)=>{
                    listChange.push(item);
                })
                clickProduct();
                
            })
        })  
    };
    checkRequestPrice();
    console.log(priceRequest);
});
