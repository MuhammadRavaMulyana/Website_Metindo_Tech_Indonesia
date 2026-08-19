export interface Product {
  id: number;
  name: string;
  description: string;
  descriptionId?: string;
  descriptionJa?: string;
  image: string;
}

export interface Category {
  id: string;
  name: string;
  nameId?: string;
  nameJa?: string;
  description: string;
  descriptionId?: string;
  descriptionJa?: string;
  image: string;
  products: Product[];
}

export const categories: Category[] = [
  {
    id: "chemical-solutions",
    name: "Chemical Solutions",
    description:
      "Innovative chemical solutions designed to enhance the efficiency, productivity, and performance of various industrial processes through high-quality technologies and formulations.",
    image: "/asset/gabungan%20CS.png",
    products: [
      {
        id: 1,
        name: "ALVERAZERO",
        description:
          "AlveraZero is an innovative degreaser that works effectively at room temperature (10–40°C) without requiring additional energy, helping reduce operational costs. It contains a Solubilizer that stabilizes Alkali, Surfactants, and Chelating Agents. AlveraZero provides more effective oil cleaning compared to conventional methods, which typically require heating to 60–85°C.",
        descriptionId:
          "AlveraZero adalah degreaser inovatif yang bekerja efektif pada suhu ruang (10–40°C) tanpa memerlukan energi tambahan, sehingga membantu mengurangi biaya operasional. Produk ini mengandung solubilizer yang menstabilkan alkali, surfaktan, dan agen pengkelat. AlveraZero memberikan pembersihan oli yang lebih efektif dibandingkan metode konvensional yang biasanya memerlukan pemanasan hingga 60–85°C.",
        descriptionJa:
          "AlveraZeroは、追加のエネルギーを必要とせず、室温（10～40°C）で効果的に使用できる革新的な脱脂剤です。運用コストの削減に貢献します。アルカリ、界面活性剤、キレート剤を安定化するソルビライザーを含み、従来の方法では通常60～85°Cまで加熱する必要がありますが、より効果的に油を洗浄できます。",
        image: "/asset/Chemical Solutions/AlveraZero.png",
      },
      {
        id: 2,
        name: "CARBONX",
        description:
          "CarbonX is a revolutionary solution for modern boiler systems that simultaneously reduces SOx emissions by 25% and NOx emissions by 15% through conversion into fertilizer, improves fuel efficiency by 3–20% through optimized combustion, and eliminates slagging. It addresses common combustion challenges such as high emissions, incomplete combustion, and frequent shutdowns caused by corrosion.",
        descriptionId:
          "CarbonX adalah solusi revolusioner untuk sistem boiler modern yang secara bersamaan mengurangi emisi SOx sebesar 25% dan emisi NOx sebesar 15% melalui konversi menjadi pupuk, meningkatkan efisiensi bahan bakar sebesar 3–20% melalui pembakaran yang optimal, serta menghilangkan pembentukan slag. CarbonX mengatasi berbagai masalah pembakaran seperti emisi tinggi, pembakaran tidak sempurna, dan penghentian operasi yang sering terjadi akibat korosi.",
        descriptionJa:
          "CarbonXは、最新のボイラーシステム向けの革新的なソリューションです。SOx排出量を25%、NOx排出量を15%削減し、肥料への変換を実現します。また、燃焼を最適化することで燃料効率を3～20%向上させ、スラグの発生を抑制します。高排出、不完全燃焼、腐食による頻繁な停止など、一般的な燃焼課題に対応します。",
        image: "/asset/Chemical Solutions/CarbonX.png",
      },
      {
        id: 3,
        name: "QUENCHANT",
        description:
          "Quenchant-Precise addresses the main challenges associated with quenching oil by providing stable, controlled cooling through three stages (vapor blanket, boiling, and convection), helping prevent product defects such as deformation and cracking. Its anti-oxidation formula minimizes sludge formation and ensures consistent hardness in a single process, making it an ideal solution for maximizing production efficiency.",
        descriptionId:
          "Quenchant-Precise mengatasi berbagai tantangan pada oli quenching dengan menyediakan pendinginan yang stabil dan terkontrol melalui tiga tahap, yaitu vapor blanket, boiling, dan convection. Produk ini membantu mencegah cacat seperti deformasi dan retak. Formula antioksidasinya meminimalkan pembentukan sludge dan menjaga kekerasan yang konsisten dalam satu proses, sehingga ideal untuk meningkatkan efisiensi produksi.",
        descriptionJa:
          "Quenchant-Preciseは、焼入れ油に関する主な課題に対応し、蒸気膜、沸騰、対流の3段階による安定した制御冷却を実現します。変形や割れなどの製品欠陥を防ぎ、酸化防止処方によってスラッジの発生を抑制し、一つの工程で安定した硬度を確保することで、生産効率の向上に貢献します。",
        image: "/asset/Chemical Solutions/Quenchant.png",
      },
      {
        id: 4,
        name: "FINEFORM-FORMING OIL",
        description:
          "FineForm-Forming Oil is an innovative metal-forming oil featuring an Extreme Pressure (EP) formula (μ<0.1) and Chlorine-Free technology. It reduces high friction, prevents sludge formation, and resists degradation, helping lower operational costs through superior oxidation stability.",
        descriptionId:
          "FineForm-Forming Oil adalah oli inovatif untuk proses pembentukan logam dengan formula Extreme Pressure (EP) (μ<0.1) dan teknologi bebas klorin. Produk ini mengurangi gesekan tinggi, mencegah pembentukan sludge, dan tahan terhadap degradasi, sehingga membantu menurunkan biaya operasional melalui stabilitas oksidasi yang lebih baik.",
        descriptionJa:
          "FineForm-Forming Oilは、Extreme Pressure（EP）処方（μ<0.1）と塩素フリー技術を採用した革新的な金属成形油です。高い摩擦を低減し、スラッジの発生を防ぎ、劣化に強く、優れた酸化安定性によって運用コストの削減に貢献します。",
        image: "/asset/Chemical Solutions/FINEFORM-FORMING OIL.png",
      },
      {
        id: 5,
        name: "CAST-M",
        description:
          "Cast-M is a ceramic-based release agent with a melting point higher than that of metal and steel, providing excellent heat resistance and superior release performance.",
        descriptionId:
          "Cast-M adalah release agent berbasis keramik dengan titik leleh lebih tinggi daripada logam dan baja, sehingga memberikan ketahanan panas yang sangat baik serta kinerja pelepasan yang unggul.",
        descriptionJa:
          "Cast-Mは、金属や鋼よりも高い融点を持つセラミックベースの離型剤です。優れた耐熱性と高い離型性能を提供します。",
        image: "/asset/Chemical Solutions/CAST-M.png",
      },
      {
        id: 6,
        name: "CERANOVIS",
        description:
          "Industrial surfaces often face issues such as slag buildup, corrosion, and frequent cleaning requirements. Ceranovis Nano Ceramic Coating addresses these challenges with a heat-resistant nano coating that prevents slag accumulation, provides superior corrosion protection, and extends cleaning intervals improving efficiency and reducing downtime.",
        descriptionId:
          "Permukaan industri sering menghadapi masalah seperti penumpukan slag, korosi, dan kebutuhan pembersihan yang sering. Ceranovis Nano Ceramic Coating mengatasi masalah tersebut dengan lapisan nano tahan panas yang mencegah penumpukan slag, memberikan perlindungan korosi yang unggul, serta memperpanjang interval pembersihan sehingga meningkatkan efisiensi dan mengurangi downtime.",
        descriptionJa:
          "産業用表面では、スラグの堆積、腐食、頻繁な清掃などの問題が発生することがあります。Ceranovis Nano Ceramic Coatingは、耐熱ナノコーティングによってこれらの課題に対応し、スラグの蓄積を防ぎ、優れた防食性能を提供するとともに、清掃間隔を延ばして効率を高め、ダウンタイムを削減します。",
        image: "/asset/Chemical Solutions/CERANOVIS.png",
      },
      {
        id: 7,
        name: "RUSTX COATING",
        description:
          "RustX Coating addresses the limitations of traditional coatings, such as excessive coating thickness, low productivity, and limited durability, with an ultra-thin, fast-drying layer. Its single-layer application improves production efficiency while providing superior resistance in corrosive and high temperature environments.",
        descriptionId:
          "RustX Coating mengatasi keterbatasan coating tradisional seperti ketebalan lapisan yang berlebihan, produktivitas rendah, dan daya tahan terbatas dengan lapisan ultra-tipis yang cepat kering. Aplikasi satu lapis meningkatkan efisiensi produksi sekaligus memberikan ketahanan yang unggul pada lingkungan korosif dan bersuhu tinggi.",
        descriptionJa:
          "RustX Coatingは、過度な膜厚、低い生産性、限られた耐久性など従来のコーティングの課題を、超薄膜で速乾性のあるコーティングによって改善します。1層塗布により生産効率を向上させながら、腐食環境や高温環境で優れた耐性を発揮します。",
        image: "/asset/Chemical Solutions/RUSTX.png",
      },
      {
        id: 8,
        name: "RUSTX OIL",
        description:
          "RustX Oil CLP overcomes the limitations of conventional rust-preventive oils by providing maximum protection, more than 120 hours of corrosion resistance in a salt spray test, and a non-greasy finish. Its Water Replacement technology also reduces the need for reapplication by up to 50%.",
        descriptionId:
          "RustX Oil CLP mengatasi keterbatasan oli pencegah karat konvensional dengan memberikan perlindungan maksimal, ketahanan korosi lebih dari 120 jam dalam uji salt spray, serta hasil akhir yang tidak berminyak. Teknologi Water Replacement juga mengurangi kebutuhan aplikasi ulang hingga 50%.",
        descriptionJa:
          "RustX Oil CLPは、最大限の防錆保護、塩水噴霧試験で120時間を超える耐食性、べたつきのない仕上がりを提供し、従来の防錆油の課題を解決します。Water Replacement技術により、再塗布の必要性も最大50%削減できます。",
        image: "/asset/Chemical Solutions/RUSTX.png",
      },
      {
        id: 9,
        name: "LUBRICANTS",
        description:
          "Lubrication solutions powered by advanced Korean technology, delivering innovative solutions for customers while supporting sustainability.",
        descriptionId:
          "Solusi pelumasan berbasis teknologi Korea yang canggih, menghadirkan solusi inovatif bagi pelanggan sekaligus mendukung keberlanjutan.",
        descriptionJa:
          "高度な韓国技術を採用した潤滑ソリューションで、お客様に革新的な製品を提供するとともに、持続可能性を支援します。",
        image: "/asset/Chemical Solutions/LUBRICANTS.png",
      },
      {
        id: 10,
        name: "ANTISEIZING DIELUBE",
        description:
          "Die lubricants powered by advanced Korean technology, providing innovative solutions for customers while supporting sustainability.",
        descriptionId:
          "Pelumas die berbasis teknologi Korea yang canggih, memberikan solusi inovatif bagi pelanggan sekaligus mendukung keberlanjutan.",
        descriptionJa:
          "高度な韓国技術を採用したダイ用潤滑剤で、お客様に革新的なソリューションを提供するとともに、持続可能性を支援します。",
        image: "/asset/Chemical Solutions/ANTISEIZING DIELUBE.png",
      },
    ],
  },

  {
    id: "mechanical-solutions",
    name: "Mechanical Solutions",
    description:
      "Mechanical and industrial technology solutions designed to improve precision, efficiency, productivity, and reliability across various manufacturing and industrial operations.",
    image: "/asset/gabungan%20MS.png",
    products: [
      {
        id: 1,
        name: "COPROMEC",
        description:
          "Copromec’s Hybrid Plunger System addresses porosity, plunger wear, and injection instability in conventional die casting through an expandable ring for enhanced stability, an anti backflash design, and wear resistant materials proven to reduce defects and improve productivity.",
        descriptionId:
          "Hybrid Plunger System dari Copromec mengatasi porositas, keausan plunger, dan ketidakstabilan injeksi pada proses die casting konvensional melalui expandable ring untuk meningkatkan stabilitas, desain anti-backflash, serta material tahan aus yang terbukti mengurangi cacat dan meningkatkan produktivitas.",
        descriptionJa:
          "CopromecのHybrid Plunger Systemは、拡張リングによる安定性向上、アンチバックフラッシュ設計、耐摩耗材料を採用し、従来のダイカストにおける気孔、プランジャー摩耗、射出不安定の問題に対応します。これにより欠陥を低減し、生産性を向上させます。",
        image: "/asset/Mechanical Solutions/COPROMEC.png",
      },
      {
        id: 2,
        name: "NANO INSULATION",
        description:
          "Nano Insulation Technology addresses the limitations of conventional insulation, such as excessive thickness, thermal inefficiency, and complex installation, with an ultra thin material that saves space, lower thermal conductivity for maximum energy efficiency, and a fast installation system that minimizes thermal gaps.",
        descriptionId:
          "Teknologi Nano Insulation mengatasi keterbatasan insulasi konvensional seperti ketebalan berlebih, ketidakefisienan termal, dan pemasangan yang kompleks melalui material ultra-tipis yang menghemat ruang, konduktivitas termal yang lebih rendah untuk efisiensi energi maksimum, serta sistem pemasangan cepat yang meminimalkan celah termal.",
        descriptionJa:
          "Nano Insulation Technologyは、過度な厚さ、熱効率の低さ、複雑な施工など従来の断熱材の課題を解決します。省スペースの超薄型材料、エネルギー効率を最大化する低熱伝導率、熱的な隙間を最小限に抑える迅速な施工システムを提供します。",
        image: "/asset/Mechanical Solutions/NANO INSULATION.png",
      },
      {
        id: 3,
        name: "ALUMINA FIBER",
        description:
          "Alumina Fiber addresses the challenges of shrinkage, unstable thermal conductivity, and degradation dust found in conventional materials at high temperatures. With a 72% alumina composition, it remains stable at temperatures up to 1,600°C without shrinkage, provides precise thermal conductivity to minimize heat loss, and features a zero-dust formulation that eliminates contamination and reduces cleaning costs.",
        descriptionId:
          "Alumina Fiber mengatasi masalah penyusutan, konduktivitas termal yang tidak stabil, dan debu akibat degradasi pada material konvensional bersuhu tinggi. Dengan komposisi alumina 72%, material ini tetap stabil hingga suhu 1.600°C tanpa penyusutan, menyediakan konduktivitas termal yang presisi untuk meminimalkan kehilangan panas, serta memiliki formulasi bebas debu yang menghilangkan kontaminasi dan mengurangi biaya pembersihan.",
        descriptionJa:
          "Alumina Fiberは、高温の従来材料で見られる収縮、不安定な熱伝導率、劣化粉じんの課題に対応します。アルミナ72%の組成により、1,600°Cまで収縮せず安定し、熱損失を抑える精密な熱伝導特性と、汚染を防ぎ清掃コストを削減する無粉じん処方を備えています。",
        image: "/asset/Mechanical Solutions/ALUMINA FIBER.png",
      },
      {
        id: 4,
        name: "KRIGSMANN KROMA",
        description:
          "Kroma Technology addresses overspray issues that contribute to high VOC emissions by using low pressure spray technology at 1–6 PSI. This technology reduces paint waste and VOC emissions while improving overall coating quality.",
        descriptionId:
          "Teknologi Kroma mengatasi masalah overspray yang berkontribusi terhadap tingginya emisi VOC dengan menggunakan teknologi penyemprotan bertekanan rendah pada 1–6 PSI. Teknologi ini mengurangi pemborosan cat dan emisi VOC sekaligus meningkatkan kualitas coating secara keseluruhan.",
        descriptionJa:
          "Kroma Technologyは、1～6 PSIの低圧スプレー技術を使用して、VOC排出量の増加につながるオーバースプレーの問題に対応します。塗料の無駄とVOC排出量を削減しながら、コーティング品質全体を向上させます。",
        image: "/asset/Mechanical Solutions/KRIGSMANN KROMA.png",
      },
      {
        id: 5,
        name: "ALUMINIUM EVAPORATION",
        description:
          "High Performance Evaboat addresses inconsistent film thickness, short service life, and spitting issues in conventional metallization processes with TiB₂/BN materials that withstand temperatures up to 1,500°C for stable heat distribution, a zero waste buyback program that reduces material waste, and alumina fiber funnel sleeves that eliminate spitting.",
        descriptionId:
          "High Performance Evaboat mengatasi ketidakkonsistenan ketebalan film, masa pakai yang pendek, dan masalah spitting pada proses metalisasi konvensional menggunakan material TiB₂/BN yang mampu bertahan hingga 1.500°C untuk distribusi panas yang stabil, program zero-waste buyback untuk mengurangi limbah material, serta alumina fiber funnel sleeve yang menghilangkan spitting.",
        descriptionJa:
          "High Performance Evaboatは、TiB₂/BN材料による安定した熱分布、材料廃棄を削減するゼロウェイスト買い戻しプログラム、スピッティングを防ぐアルミナファイバー製ファネルスリーブによって、従来のメタライゼーション工程における膜厚のばらつき、短い寿命、スピッティングの問題に対応します。材料は1,500°Cまでの温度に耐えます。",
        image: "/asset/Mechanical Solutions/ALUMINIUM EVAPORATION.png",
      },
      {
        id: 6,
        name: "NOXMAT",
        description:
          "High performance electric heating system technology for industrial processing and gas burner combustion applications. Our technology portfolio includes recuperator burners, control devices, radiant tube heaters, electric heating elements, and more.",
        descriptionId:
          "Teknologi sistem pemanas listrik berperforma tinggi untuk proses industri dan aplikasi pembakaran gas burner. Portofolio teknologi mencakup recuperator burner, perangkat kontrol, radiant tube heater, elemen pemanas listrik, dan lainnya.",
        descriptionJa:
          "産業加工およびガスバーナー燃焼用途向けの高性能電気加熱システム技術です。製品ポートフォリオには、リキュペレーターバーナー、制御装置、ラジアントチューブヒーター、電気加熱エレメントなどが含まれます。",
        image: "/asset/Mechanical Solutions/NOXMAT.png",
      },
      {
        id: 7,
        name: "EBNER",
        description:
          "A global market leader in heat treatment facilities for the semi finished metal products industry. Specializing in the research, development, fabrication, installation, and commissioning of heat treatment facilities for the steel, aluminum, and copper based metals industries.",
        descriptionId:
          "Pemimpin pasar global dalam fasilitas heat treatment untuk industri produk logam semi-jadi. EBNER mengkhususkan diri dalam penelitian, pengembangan, fabrikasi, instalasi, dan commissioning fasilitas heat treatment untuk industri baja, aluminium, dan logam berbasis tembaga.",
        descriptionJa:
          "半製品金属産業向けの熱処理設備における世界的な市場リーダーです。鉄鋼、アルミニウム、銅系金属産業向けの熱処理設備について、研究、開発、製造、設置、試運転を専門としています。",
        image: "/asset/Mechanical Solutions/EBNER & ALPINE METAL TECH.png",
      },
      {
        id: 8,
        name: "ALPINE METAL TECH",
        description:
          "We develop, design, manufacture, and maintain specialized machinery for the steel and automotive industries, as well as fire simulators, under seven brands: NUMTEC, GEGA, KNORR, MAKRA, AMAKON, MAGNEMAG SIMULATION, and INTERMATO.",
        descriptionId:
          "Kami mengembangkan, merancang, memproduksi, dan memelihara mesin khusus untuk industri baja dan otomotif, serta simulator kebakaran, melalui tujuh merek: NUMTEC, GEGA, KNORR, MAKRA, AMAKON, MAGNEMAG SIMULATION, dan INTERMATO.",
        descriptionJa:
          "鉄鋼・自動車産業向けの特殊機械、ならびに火災シミュレーターを、NUMTEC、GEGA、KNORR、MAKRA、AMAKON、MAGNEMAG SIMULATION、INTERMATOの7ブランドで開発、設計、製造、保守しています。",
        image: "/asset/Mechanical Solutions/EBNER & ALPINE METAL TECH.png",
      },
      {
        id: 9,
        name: "N-PRIME (DROSS MACHINE)",
        description:
          "Chip recycling technology that processes machining chips through remelting, achieving yields of up to 95%. N-Prime produces Grade A ingots that can be directly reused, while the resulting dust residue can also be utilized by refractory and paving block manufacturers.",
        descriptionId:
          "Teknologi daur ulang chip yang memproses serpihan hasil machining melalui proses peleburan kembali dengan tingkat hasil hingga 95%. N-Prime menghasilkan ingot Grade A yang dapat langsung digunakan kembali, sementara residu debu yang dihasilkan juga dapat dimanfaatkan oleh produsen refractory dan paving block.",
        descriptionJa:
          "加工チップを再溶解して処理し、最大95%の歩留まりを実現するチップリサイクル技術です。N-Primeは直接再利用できるGrade Aインゴットを生産し、発生する粉じん残渣も耐火物や舗装ブロックのメーカーで活用できます。",
        image: "/asset/Mechanical Solutions/N-PRIME (DROSS MACHINE).png",
      },
    ],
  },

  {
  id: "special-tools",
  name: "Special Tools",
  description:
    "Precision tooling solutions to support various manufacturing processes, including cutting, turning, machining, and the production of specialized components with high performance and durability.",
  image: "/asset/gabungan%20ST.png",

  products: [
    {
      id: 1,
      name: "Standard Cutting Tools",
      description:
        "Standard cutting tools for various cutting and machining processes with high precision. Designed to deliver consistent surface quality, optimal tool life, and improved production efficiency.",
      descriptionId:
        "Cutting tools standar untuk berbagai proses pemotongan dan machining dengan presisi tinggi. Dirancang untuk menghasilkan kualitas permukaan yang konsisten, umur alat yang optimal, dan peningkatan efisiensi produksi.",
      descriptionJa:
        "さまざまな切削・加工工程に対応する高精度の標準切削工具です。安定した表面品質、最適な工具寿命、生産効率の向上を実現するよう設計されています.",
      image: "/asset/Spesial Tools/Standard Cutting Tools.png",
    },

    {
      id: 2,
      name: "Turning Tools",
      description:
        "Turning tools designed to support the machining of various materials with high precision and stability. These tooling solutions help achieve accurate dimensions, excellent surface quality, and optimal machining productivity.",
      descriptionId:
        "Turning tools yang dirancang untuk mendukung proses machining berbagai material dengan presisi dan stabilitas tinggi. Solusi tooling ini membantu mencapai dimensi yang akurat, kualitas permukaan yang sangat baik, dan produktivitas machining yang optimal.",
      descriptionJa:
        "さまざまな材料の加工を高精度かつ安定して行うための旋削工具です。正確な寸法、優れた表面品質、最適な加工生産性の実現を支援します。",
      image: "/asset/Spesial Tools/Turning Tools.png",
    },

    {
      id: 3,
      name: "Machined Parts",
      description:
        "High-precision machined components manufactured according to customer requirements and specifications. Suitable for various industrial applications, with a focus on dimensional accuracy, surface quality, and production consistency.",
      descriptionId:
        "Komponen hasil machining berpresisi tinggi yang diproduksi sesuai kebutuhan dan spesifikasi pelanggan. Cocok untuk berbagai aplikasi industri dengan fokus pada akurasi dimensi, kualitas permukaan, dan konsistensi produksi.",
      descriptionJa:
        "お客様の要件と仕様に合わせて製造された高精度の機械加工部品です。寸法精度、表面品質、生産の一貫性を重視し、さまざまな産業用途に適しています。",
      image: "/asset/Spesial Tools/Machined Parts.png",
    },

    {
      id: 4,
      name: "Machining Tools",
      description:
        "A wide range of machining tools to support industrial machining processes, from cutting to finishing. Designed to deliver precision, durability, and optimal performance across various manufacturing applications.",
      descriptionId:
        "Berbagai macam machining tools untuk mendukung proses machining industri, mulai dari pemotongan hingga finishing. Dirancang untuk memberikan presisi, daya tahan, dan kinerja optimal pada berbagai aplikasi manufaktur.",
      descriptionJa:
        "切削から仕上げまで、産業用加工工程を支援する幅広いマシニング工具です。さまざまな製造用途で精度、耐久性、最適な性能を発揮するよう設計されています。",
      image: "/asset/Spesial Tools/Machining Tools.png",
    },

    {
      id: 5,
      name: "THX Abrasives",
      description:
        "THX Abrasives (China) is an OEM manufacturer of abrasive tools, offering cutting, grinding, sanding, and diamond tools for various industrial applications. Its products are designed for materials such as metal, wood, stone, glass, and concrete, delivering reliable performance, durability, and precision across different manufacturing processes.",
      descriptionId:
        "THX Abrasives (China) adalah produsen OEM alat abrasif yang menawarkan cutting tools, grinding tools, sanding tools, dan diamond tools untuk berbagai aplikasi industri. Produk-produknya dirancang untuk material seperti logam, kayu, batu, kaca, dan beton, dengan kinerja, daya tahan, dan presisi yang andal pada berbagai proses manufaktur.",
      descriptionJa:
        "THX Abrasives（中国）は、さまざまな産業用途向けに切削、研削、サンディング、ダイヤモンド工具を提供するOEM研磨工具メーカーです。金属、木材、石材、ガラス、コンクリートなどに対応し、各種製造工程で信頼性、耐久性、精度を提供します。",
      image: "/asset/Spesial%20Tools/THX%20Abrasives.png",
    },
  ],
},

  {
    id: "filter",
    name: "Filter",
    description:
      "High-quality filtration solutions to maintain air, liquid, oil, and hydraulic system cleanliness, while protecting equipment and enhancing industrial operational efficiency.",
    image: "/asset/gabungan%20Filter.png",
    products: [
      {
        id: 1,
        name: "Industrial Filters",
        description:
          "Industrial filtration solutions designed to filter and control various types of contaminants, such as dust, particles, oil, air, and liquids. A wide range of filter products is available to support production and industrial operational needs with high filtration efficiency, equipment protection, and process quality assurance.",
        descriptionId:
          "Solusi filtrasi industri yang dirancang untuk menyaring dan mengendalikan berbagai jenis kontaminan seperti debu, partikel, oli, udara, dan cairan. Beragam produk filter tersedia untuk mendukung kebutuhan produksi dan operasional industri dengan efisiensi filtrasi tinggi, perlindungan peralatan, dan jaminan kualitas proses.",
        descriptionJa:
          "ほこり、粒子、油、空気、液体などさまざまな汚染物質をろ過・管理するための産業用ろ過ソリューションです。高いろ過効率、設備保護、工程品質の確保により、生産および産業運用を支援します。",
        image: "/asset/Filter/Filter.png",
      },
    ],
  },

  {
    id: "cbn",
    name: "CBN",
    description:
      "CBN tooling solutions for cutting, grinding, and finishing hard materials, offering high wear resistance, optimal precision, and consistent performance across various manufacturing processes.",
    image: "/asset/gabungan%20CBN.png",
    products: [
      {
        id: 1,
        name: "Cutter and Others Wheel",
        description:
          "A wide range of cutting wheels and abrasive wheels for cutting, grinding, and finishing industrial materials. Designed to deliver precise cutting results, optimal durability, and efficiency across various manufacturing applications.",
        descriptionId:
          "Berbagai macam cutting wheel dan abrasive wheel untuk proses pemotongan, penggerindaan, dan finishing material industri. Dirancang untuk menghasilkan pemotongan yang presisi, daya tahan optimal, dan efisiensi pada berbagai aplikasi manufaktur.",
        descriptionJa:
          "産業材料の切削、研削、仕上げに使用する幅広い切削ホイールおよび研磨ホイールです。さまざまな製造用途で精密な切削結果、優れた耐久性、効率を実現します。",
        image: "/asset/CBN/Cutter and Others Wheel.png",
      },
      {
        id: 2,
        name: "End Mills, Drill, Reamer",
        description:
          "A wide range of cutting tools for milling, drilling, and precision hole finishing processes. These products are designed to deliver excellent surface quality, cutting stability, and optimal tool life.",
        descriptionId:
          "Berbagai cutting tools untuk proses milling, drilling, dan finishing lubang berpresisi tinggi. Produk-produk ini dirancang untuk menghasilkan kualitas permukaan yang sangat baik, stabilitas pemotongan, dan umur alat yang optimal.",
        descriptionJa:
          "フライス加工、穴あけ、精密な穴仕上げ工程向けの幅広い切削工具です。優れた表面品質、切削安定性、最適な工具寿命を実現するよう設計されています。",
        image: "/asset/CBN/End Mills, Drill, Reamer.png",
      },
      {
        id: 3,
        name: "Rotary",
        description:
          "Rotary tools for various machining and finishing applications, delivering stable cutting performance. Suitable for detailed work, surface shaping, and precision applications across a wide range of materials.",
        descriptionId:
          "Rotary tools untuk berbagai aplikasi machining dan finishing dengan kinerja pemotongan yang stabil. Cocok untuk pekerjaan detail, pembentukan permukaan, dan aplikasi presisi pada berbagai jenis material.",
        descriptionJa:
          "さまざまな加工・仕上げ用途に対応するロータリーツールで、安定した切削性能を提供します。幅広い材料の細かな加工、表面形成、精密用途に適しています。",
        image: "/asset/CBN/Rotary.png",
      },
      {
        id: 4,
        name: "Wheels",
        description:
          "A wide range of abrasive wheels for grinding, finishing, and surface treatment applications. Designed to deliver consistent grinding performance, high durability, and optimal surface results.",
        descriptionId:
          "Berbagai abrasive wheel untuk aplikasi grinding, finishing, dan surface treatment. Dirancang untuk memberikan kinerja penggerindaan yang konsisten, daya tahan tinggi, dan hasil permukaan yang optimal.",
        descriptionJa:
          "研削、仕上げ、表面処理用途向けの幅広い研磨ホイールです。安定した研削性能、高い耐久性、最適な表面仕上げを実現するよう設計されています。",
        image: "/asset/CBN/Wheels.png",
      },
    ],
  },

  {
    id: "superon",
    name: "Superon",
    description:
      "Chemical maintenance and welding solutions to support welding, lubrication, cleaning, and component protection processes with high performance and efficiency.",
    image: "/asset/gabungan%20Superon.png",
    products: [
      {
        id: 1,
        name: "Superon Super 40",
        description:
          "A multifunctional fluid designed to lubricate, clean, protect, and address various issues in industrial components and equipment.",
        descriptionId:
          "Cairan multifungsi yang dirancang untuk melumasi, membersihkan, melindungi, dan mengatasi berbagai masalah pada komponen serta peralatan industri.",
        descriptionJa:
          "産業用部品や設備の潤滑、洗浄、保護、さまざまな問題への対応を目的とした多機能液です。",
        image: "/asset/Superon/Super 40.png",
      },
      {
        id: 2,
        name: "Superon Super Anti Spatter E",
        description:
          "Anti-spatter solutions designed to prevent welding spatter from adhering to workpiece surfaces and equipment, resulting in cleaner welding processes and easier maintenance.",
        descriptionId:
          "Solusi anti-spatter yang dirancang untuk mencegah percikan las menempel pada permukaan benda kerja dan peralatan, sehingga menghasilkan proses pengelasan yang lebih bersih dan memudahkan perawatan.",
        descriptionJa:
          "溶接スパッタがワーク表面や設備に付着するのを防ぐアンチスパッターソリューションです。よりクリーンな溶接工程と容易なメンテナンスを実現します。",
        image: "/asset/Superon/Super Anti Spatter E.png",
      },
      {
        id: 3,
        name: "Superon Super Chain Lube",
        description:
          "Specialized chain lubricants designed to reduce friction and wear while ensuring smooth chain movement across various industrial applications.",
        descriptionId:
          "Pelumas rantai khusus yang dirancang untuk mengurangi gesekan dan keausan sekaligus memastikan pergerakan rantai yang lancar pada berbagai aplikasi industri.",
        descriptionJa:
          "さまざまな産業用途で摩擦と摩耗を低減し、チェーンを滑らかに動作させるための専用チェーン潤滑剤です。",
        image: "/asset/Superon/Super Chain Lube.png",
      },
      {
        id: 4,
        name: "Superon Super Cleaner",
        description:
          "Industrial cleaners designed to remove oil, grease, dirt, and contaminants from component and equipment surfaces.",
        descriptionId:
          "Pembersih industri yang dirancang untuk menghilangkan oli, grease, kotoran, dan kontaminan dari permukaan komponen serta peralatan.",
        descriptionJa:
          "部品や設備の表面から油、グリース、汚れ、各種汚染物質を除去するための産業用クリーナーです。",
        image: "/asset/Superon/Super Cleaner.png",
      },
      {
        id: 5,
        name: "Superon Super Developer",
        description:
          "Developer products designed to support surface inspection and testing processes for maintenance and component evaluation.",
        descriptionId:
          "Produk developer yang dirancang untuk mendukung proses inspeksi dan pengujian permukaan dalam kegiatan pemeliharaan serta evaluasi komponen.",
        descriptionJa:
          "保守および部品評価における表面検査・試験工程を支援するための現像剤製品です。",
        image: "/asset/Superon/Super Developer.png",
      },
      {
        id: 6,
        name: "Superon Super Nozzle Dip Gel (Tin Can)",
        description:
          "Nozzle protection gel designed to prevent welding spatter buildup on nozzles while maintaining performance and ensuring smooth welding operations.",
        descriptionId:
          "Gel pelindung nozzle yang dirancang untuk mencegah penumpukan percikan las pada nozzle sekaligus menjaga kinerja dan memastikan proses pengelasan berjalan lancar.",
        descriptionJa:
          "ノズルへの溶接スパッタの付着・蓄積を防ぎ、性能を維持しながらスムーズな溶接作業を支援するノズル保護ジェルです。",
        image: "/asset/Superon/Super Nozzle Dip Gel (Tin Can).png",
      },
      {
        id: 7,
        name: "Superon Super Offline Contact Cleaner",
        description:
          "Contact cleaner designed to remove dirt, oil, and contaminants from electrical contact components without leaving residue that could interfere with electrical connections.",
        descriptionId:
          "Pembersih kontak yang dirancang untuk menghilangkan kotoran, oli, dan kontaminan dari komponen kontak listrik tanpa meninggalkan residu yang dapat mengganggu sambungan listrik.",
        descriptionJa:
          "電気接点部品から汚れ、油、汚染物質を除去し、電気接続に干渉する残留物を残さないよう設計された接点クリーナーです。",
        image: "/asset/Superon/Super Offline Contact Cleaner.png",
      },
      {
        id: 8,
        name: "Superon Super Pain Stripper Spray",
        description:
          "A spray-on paint remover designed to effectively strip paint from various surfaces, providing a practical solution for maintenance and refinishing processes.",
        descriptionId:
          "Penghilang cat berbentuk spray yang dirancang untuk mengikis cat secara efektif dari berbagai permukaan, memberikan solusi praktis untuk proses perawatan dan refinishing.",
        descriptionJa:
          "さまざまな表面から塗料を効果的に除去するスプレー式塗料剥離剤で、保守や再仕上げ工程に実用的なソリューションを提供します。",
        image: "/asset/Superon/Super Paint Stripper Spray.png",
      },
      {
        id: 9,
        name: "Superon Super Penetrant",
        description:
          "A penetrating fluid designed to reach gaps and hard-to-access areas of components, supporting inspection, defect identification, and maintenance processes.",
        descriptionId:
          "Cairan penetran yang dirancang untuk menjangkau celah dan area komponen yang sulit diakses, mendukung proses inspeksi, identifikasi cacat, dan pemeliharaan.",
        descriptionJa:
          "部品の隙間やアクセスしにくい箇所まで浸透し、検査、欠陥の特定、保守工程を支援する浸透液です。",
        image: "/asset/Superon/Super Penetrant.png",
      },
    ],
  },
];

export const getCategoryById = (
  id: string
): Category | undefined => {
  return categories.find((cat) => cat.id === id);
};