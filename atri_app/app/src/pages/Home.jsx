import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { TextBox } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Button } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { Image } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { Rating } from "@atrilabs/react-component-manifests/src/manifests/Rating/Rating.tsx";
import { useFlex14Cb, useFlex15Cb, useFlex17Cb, useFlex18Cb, useFlex19Cb, useFlex22Cb, useFlex24Cb, useFlex26Cb, useFlex25Cb, useFlex33Cb, useFlex34Cb, useFlex35Cb, useFlex39Cb, useFlex40Cb, useFlex41Cb, useFlex44Cb, useFlex50Cb, useFlex49Cb, useFlex45Cb, useFlex48Cb, useFlex47Cb, useFlex46Cb, useFlex52Cb, useFlex51Cb, useFlex54Cb, useFlex70Cb, useFlex67Cb, useFlex71Cb, useFlex75Cb, useFlex76Cb, useFlex77Cb, useFlex81Cb, useFlex78Cb, useFlex87Cb, useFlex86Cb, useFlex90Cb, useFlex95Cb, useFlex93Cb, useFlex94Cb, useFlex96Cb, useFlex97Cb, useFlex99Cb, useFlex98Cb, useFlex106Cb, useFlex102Cb, useFlex100Cb, useFlex103Cb, useFlex104Cb, useFlex105Cb, useFlex111Cb, useFlex112Cb, useFlex113Cb, useFlex116Cb, useFlex115Cb, useFlex114Cb, useFlex117Cb, useFlex119Cb, useFlex118Cb, useFlex129Cb, useFlex130Cb, useFlex136Cb, useFlex137Cb, useFlex138Cb, useFlex139Cb, useFlex140Cb, useFlex141Cb, useFlex131Cb, useTextBox95Cb, useFlex110Cb, useFlex142Cb, useFlex157Cb, useTextBox13Cb, useTextBox14Cb, useTextBox15Cb, useTextBox16Cb, useTextBox17Cb, useButton1Cb, useButton2Cb, useImage4Cb, useTextBox21Cb, useTextBox37Cb, useImage6Cb, useTextBox25Cb, useTextBox26Cb, useButton5Cb, useButton6Cb, useTextBox27Cb, useTextBox32Cb, useTextBox33Cb, useTextBox34Cb, useTextBox35Cb, useImage15Cb, useTextBox44Cb, useTextBox42Cb, useTextBox43Cb, useTextBox53Cb, useImage18Cb, useTextBox51Cb, useTextBox52Cb, useTextBox50Cb, useImage17Cb, useTextBox48Cb, useTextBox49Cb, useTextBox56Cb, useImage19Cb, useTextBox54Cb, useTextBox55Cb, useTextBox58Cb, useButton7Cb, useButton8Cb, useFlex80Cb, useImage24Cb, useTextBox72Cb, useTextBox73Cb, useTextBox74Cb, useButton11Cb, useButton12Cb, useImage25Cb, useTextBox79Cb, useTextBox78Cb, useTextBox81Cb, useTextBox82Cb, useImage33Cb, useTextBox90Cb, useTextBox94Cb, useTextBox99Cb, useImage32Cb, useTextBox88Cb, useTextBox93Cb, useTextBox98Cb, useImage30Cb, useTextBox85Cb, useTextBox91Cb, useTextBox96Cb, useImage31Cb, useTextBox86Cb, useTextBox92Cb, useTextBox97Cb, useTextBox105Cb, useTextBox106Cb, useImage35Cb, useTextBox101Cb, useTextBox107Cb, useTextBox108Cb, useTextBox109Cb, useImage36Cb, useTextBox110Cb, useTextBox111Cb, useTextBox112Cb, useImage37Cb, useTextBox113Cb, useImage38Cb, useTextBox114Cb, useTextBox115Cb, useTextBox116Cb, useButton19Cb, useButton20Cb, useTextBox117Cb, useTextBox118Cb, useButton21Cb, useButton22Cb, useImage39Cb, useTextBox120Cb, useImage40Cb, useImage41Cb, useTextBox121Cb, useTextBox122Cb, useTextBox123Cb, useRating1Cb, useImage42Cb, useTextBox124Cb, useTextBox128Cb, useTextBox129Cb, useTextBox130Cb } from "../page-cbs/Home";
import "../page-css/Home.css";
import "../custom/Home";

export default function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    const unsub = subscribeInternalNavigation((url) => {
      navigate(url);
    });
    return unsub;
  }, [navigate]);

  const location = useLocation();
  useLayoutEffect(()=>{
    fetchPageProps(location.pathname, location.search).then((res)=>{
      updateStoreStateFromController(res.pageName, res.pageState)
    })
  }, [location])

  const Flex14Props = useStore((state)=>state["Home"]["Flex14"]);
const Flex14IoProps = useIoStore((state)=>state["Home"]["Flex14"]);
const Flex14Cb = useFlex14Cb()
const Flex15Props = useStore((state)=>state["Home"]["Flex15"]);
const Flex15IoProps = useIoStore((state)=>state["Home"]["Flex15"]);
const Flex15Cb = useFlex15Cb()
const Flex17Props = useStore((state)=>state["Home"]["Flex17"]);
const Flex17IoProps = useIoStore((state)=>state["Home"]["Flex17"]);
const Flex17Cb = useFlex17Cb()
const Flex18Props = useStore((state)=>state["Home"]["Flex18"]);
const Flex18IoProps = useIoStore((state)=>state["Home"]["Flex18"]);
const Flex18Cb = useFlex18Cb()
const Flex19Props = useStore((state)=>state["Home"]["Flex19"]);
const Flex19IoProps = useIoStore((state)=>state["Home"]["Flex19"]);
const Flex19Cb = useFlex19Cb()
const Flex22Props = useStore((state)=>state["Home"]["Flex22"]);
const Flex22IoProps = useIoStore((state)=>state["Home"]["Flex22"]);
const Flex22Cb = useFlex22Cb()
const Flex24Props = useStore((state)=>state["Home"]["Flex24"]);
const Flex24IoProps = useIoStore((state)=>state["Home"]["Flex24"]);
const Flex24Cb = useFlex24Cb()
const Flex26Props = useStore((state)=>state["Home"]["Flex26"]);
const Flex26IoProps = useIoStore((state)=>state["Home"]["Flex26"]);
const Flex26Cb = useFlex26Cb()
const Flex25Props = useStore((state)=>state["Home"]["Flex25"]);
const Flex25IoProps = useIoStore((state)=>state["Home"]["Flex25"]);
const Flex25Cb = useFlex25Cb()
const Flex33Props = useStore((state)=>state["Home"]["Flex33"]);
const Flex33IoProps = useIoStore((state)=>state["Home"]["Flex33"]);
const Flex33Cb = useFlex33Cb()
const Flex34Props = useStore((state)=>state["Home"]["Flex34"]);
const Flex34IoProps = useIoStore((state)=>state["Home"]["Flex34"]);
const Flex34Cb = useFlex34Cb()
const Flex35Props = useStore((state)=>state["Home"]["Flex35"]);
const Flex35IoProps = useIoStore((state)=>state["Home"]["Flex35"]);
const Flex35Cb = useFlex35Cb()
const Flex39Props = useStore((state)=>state["Home"]["Flex39"]);
const Flex39IoProps = useIoStore((state)=>state["Home"]["Flex39"]);
const Flex39Cb = useFlex39Cb()
const Flex40Props = useStore((state)=>state["Home"]["Flex40"]);
const Flex40IoProps = useIoStore((state)=>state["Home"]["Flex40"]);
const Flex40Cb = useFlex40Cb()
const Flex41Props = useStore((state)=>state["Home"]["Flex41"]);
const Flex41IoProps = useIoStore((state)=>state["Home"]["Flex41"]);
const Flex41Cb = useFlex41Cb()
const Flex44Props = useStore((state)=>state["Home"]["Flex44"]);
const Flex44IoProps = useIoStore((state)=>state["Home"]["Flex44"]);
const Flex44Cb = useFlex44Cb()
const Flex50Props = useStore((state)=>state["Home"]["Flex50"]);
const Flex50IoProps = useIoStore((state)=>state["Home"]["Flex50"]);
const Flex50Cb = useFlex50Cb()
const Flex49Props = useStore((state)=>state["Home"]["Flex49"]);
const Flex49IoProps = useIoStore((state)=>state["Home"]["Flex49"]);
const Flex49Cb = useFlex49Cb()
const Flex45Props = useStore((state)=>state["Home"]["Flex45"]);
const Flex45IoProps = useIoStore((state)=>state["Home"]["Flex45"]);
const Flex45Cb = useFlex45Cb()
const Flex48Props = useStore((state)=>state["Home"]["Flex48"]);
const Flex48IoProps = useIoStore((state)=>state["Home"]["Flex48"]);
const Flex48Cb = useFlex48Cb()
const Flex47Props = useStore((state)=>state["Home"]["Flex47"]);
const Flex47IoProps = useIoStore((state)=>state["Home"]["Flex47"]);
const Flex47Cb = useFlex47Cb()
const Flex46Props = useStore((state)=>state["Home"]["Flex46"]);
const Flex46IoProps = useIoStore((state)=>state["Home"]["Flex46"]);
const Flex46Cb = useFlex46Cb()
const Flex52Props = useStore((state)=>state["Home"]["Flex52"]);
const Flex52IoProps = useIoStore((state)=>state["Home"]["Flex52"]);
const Flex52Cb = useFlex52Cb()
const Flex51Props = useStore((state)=>state["Home"]["Flex51"]);
const Flex51IoProps = useIoStore((state)=>state["Home"]["Flex51"]);
const Flex51Cb = useFlex51Cb()
const Flex54Props = useStore((state)=>state["Home"]["Flex54"]);
const Flex54IoProps = useIoStore((state)=>state["Home"]["Flex54"]);
const Flex54Cb = useFlex54Cb()
const Flex70Props = useStore((state)=>state["Home"]["Flex70"]);
const Flex70IoProps = useIoStore((state)=>state["Home"]["Flex70"]);
const Flex70Cb = useFlex70Cb()
const Flex67Props = useStore((state)=>state["Home"]["Flex67"]);
const Flex67IoProps = useIoStore((state)=>state["Home"]["Flex67"]);
const Flex67Cb = useFlex67Cb()
const Flex71Props = useStore((state)=>state["Home"]["Flex71"]);
const Flex71IoProps = useIoStore((state)=>state["Home"]["Flex71"]);
const Flex71Cb = useFlex71Cb()
const Flex75Props = useStore((state)=>state["Home"]["Flex75"]);
const Flex75IoProps = useIoStore((state)=>state["Home"]["Flex75"]);
const Flex75Cb = useFlex75Cb()
const Flex76Props = useStore((state)=>state["Home"]["Flex76"]);
const Flex76IoProps = useIoStore((state)=>state["Home"]["Flex76"]);
const Flex76Cb = useFlex76Cb()
const Flex77Props = useStore((state)=>state["Home"]["Flex77"]);
const Flex77IoProps = useIoStore((state)=>state["Home"]["Flex77"]);
const Flex77Cb = useFlex77Cb()
const Flex81Props = useStore((state)=>state["Home"]["Flex81"]);
const Flex81IoProps = useIoStore((state)=>state["Home"]["Flex81"]);
const Flex81Cb = useFlex81Cb()
const Flex78Props = useStore((state)=>state["Home"]["Flex78"]);
const Flex78IoProps = useIoStore((state)=>state["Home"]["Flex78"]);
const Flex78Cb = useFlex78Cb()
const Flex87Props = useStore((state)=>state["Home"]["Flex87"]);
const Flex87IoProps = useIoStore((state)=>state["Home"]["Flex87"]);
const Flex87Cb = useFlex87Cb()
const Flex86Props = useStore((state)=>state["Home"]["Flex86"]);
const Flex86IoProps = useIoStore((state)=>state["Home"]["Flex86"]);
const Flex86Cb = useFlex86Cb()
const Flex90Props = useStore((state)=>state["Home"]["Flex90"]);
const Flex90IoProps = useIoStore((state)=>state["Home"]["Flex90"]);
const Flex90Cb = useFlex90Cb()
const Flex95Props = useStore((state)=>state["Home"]["Flex95"]);
const Flex95IoProps = useIoStore((state)=>state["Home"]["Flex95"]);
const Flex95Cb = useFlex95Cb()
const Flex93Props = useStore((state)=>state["Home"]["Flex93"]);
const Flex93IoProps = useIoStore((state)=>state["Home"]["Flex93"]);
const Flex93Cb = useFlex93Cb()
const Flex94Props = useStore((state)=>state["Home"]["Flex94"]);
const Flex94IoProps = useIoStore((state)=>state["Home"]["Flex94"]);
const Flex94Cb = useFlex94Cb()
const Flex96Props = useStore((state)=>state["Home"]["Flex96"]);
const Flex96IoProps = useIoStore((state)=>state["Home"]["Flex96"]);
const Flex96Cb = useFlex96Cb()
const Flex97Props = useStore((state)=>state["Home"]["Flex97"]);
const Flex97IoProps = useIoStore((state)=>state["Home"]["Flex97"]);
const Flex97Cb = useFlex97Cb()
const Flex99Props = useStore((state)=>state["Home"]["Flex99"]);
const Flex99IoProps = useIoStore((state)=>state["Home"]["Flex99"]);
const Flex99Cb = useFlex99Cb()
const Flex98Props = useStore((state)=>state["Home"]["Flex98"]);
const Flex98IoProps = useIoStore((state)=>state["Home"]["Flex98"]);
const Flex98Cb = useFlex98Cb()
const Flex106Props = useStore((state)=>state["Home"]["Flex106"]);
const Flex106IoProps = useIoStore((state)=>state["Home"]["Flex106"]);
const Flex106Cb = useFlex106Cb()
const Flex102Props = useStore((state)=>state["Home"]["Flex102"]);
const Flex102IoProps = useIoStore((state)=>state["Home"]["Flex102"]);
const Flex102Cb = useFlex102Cb()
const Flex100Props = useStore((state)=>state["Home"]["Flex100"]);
const Flex100IoProps = useIoStore((state)=>state["Home"]["Flex100"]);
const Flex100Cb = useFlex100Cb()
const Flex103Props = useStore((state)=>state["Home"]["Flex103"]);
const Flex103IoProps = useIoStore((state)=>state["Home"]["Flex103"]);
const Flex103Cb = useFlex103Cb()
const Flex104Props = useStore((state)=>state["Home"]["Flex104"]);
const Flex104IoProps = useIoStore((state)=>state["Home"]["Flex104"]);
const Flex104Cb = useFlex104Cb()
const Flex105Props = useStore((state)=>state["Home"]["Flex105"]);
const Flex105IoProps = useIoStore((state)=>state["Home"]["Flex105"]);
const Flex105Cb = useFlex105Cb()
const Flex111Props = useStore((state)=>state["Home"]["Flex111"]);
const Flex111IoProps = useIoStore((state)=>state["Home"]["Flex111"]);
const Flex111Cb = useFlex111Cb()
const Flex112Props = useStore((state)=>state["Home"]["Flex112"]);
const Flex112IoProps = useIoStore((state)=>state["Home"]["Flex112"]);
const Flex112Cb = useFlex112Cb()
const Flex113Props = useStore((state)=>state["Home"]["Flex113"]);
const Flex113IoProps = useIoStore((state)=>state["Home"]["Flex113"]);
const Flex113Cb = useFlex113Cb()
const Flex116Props = useStore((state)=>state["Home"]["Flex116"]);
const Flex116IoProps = useIoStore((state)=>state["Home"]["Flex116"]);
const Flex116Cb = useFlex116Cb()
const Flex115Props = useStore((state)=>state["Home"]["Flex115"]);
const Flex115IoProps = useIoStore((state)=>state["Home"]["Flex115"]);
const Flex115Cb = useFlex115Cb()
const Flex114Props = useStore((state)=>state["Home"]["Flex114"]);
const Flex114IoProps = useIoStore((state)=>state["Home"]["Flex114"]);
const Flex114Cb = useFlex114Cb()
const Flex117Props = useStore((state)=>state["Home"]["Flex117"]);
const Flex117IoProps = useIoStore((state)=>state["Home"]["Flex117"]);
const Flex117Cb = useFlex117Cb()
const Flex119Props = useStore((state)=>state["Home"]["Flex119"]);
const Flex119IoProps = useIoStore((state)=>state["Home"]["Flex119"]);
const Flex119Cb = useFlex119Cb()
const Flex118Props = useStore((state)=>state["Home"]["Flex118"]);
const Flex118IoProps = useIoStore((state)=>state["Home"]["Flex118"]);
const Flex118Cb = useFlex118Cb()
const Flex129Props = useStore((state)=>state["Home"]["Flex129"]);
const Flex129IoProps = useIoStore((state)=>state["Home"]["Flex129"]);
const Flex129Cb = useFlex129Cb()
const Flex130Props = useStore((state)=>state["Home"]["Flex130"]);
const Flex130IoProps = useIoStore((state)=>state["Home"]["Flex130"]);
const Flex130Cb = useFlex130Cb()
const Flex136Props = useStore((state)=>state["Home"]["Flex136"]);
const Flex136IoProps = useIoStore((state)=>state["Home"]["Flex136"]);
const Flex136Cb = useFlex136Cb()
const Flex137Props = useStore((state)=>state["Home"]["Flex137"]);
const Flex137IoProps = useIoStore((state)=>state["Home"]["Flex137"]);
const Flex137Cb = useFlex137Cb()
const Flex138Props = useStore((state)=>state["Home"]["Flex138"]);
const Flex138IoProps = useIoStore((state)=>state["Home"]["Flex138"]);
const Flex138Cb = useFlex138Cb()
const Flex139Props = useStore((state)=>state["Home"]["Flex139"]);
const Flex139IoProps = useIoStore((state)=>state["Home"]["Flex139"]);
const Flex139Cb = useFlex139Cb()
const Flex140Props = useStore((state)=>state["Home"]["Flex140"]);
const Flex140IoProps = useIoStore((state)=>state["Home"]["Flex140"]);
const Flex140Cb = useFlex140Cb()
const Flex141Props = useStore((state)=>state["Home"]["Flex141"]);
const Flex141IoProps = useIoStore((state)=>state["Home"]["Flex141"]);
const Flex141Cb = useFlex141Cb()
const Flex131Props = useStore((state)=>state["Home"]["Flex131"]);
const Flex131IoProps = useIoStore((state)=>state["Home"]["Flex131"]);
const Flex131Cb = useFlex131Cb()
const TextBox95Props = useStore((state)=>state["Home"]["TextBox95"]);
const TextBox95IoProps = useIoStore((state)=>state["Home"]["TextBox95"]);
const TextBox95Cb = useTextBox95Cb()
const Flex110Props = useStore((state)=>state["Home"]["Flex110"]);
const Flex110IoProps = useIoStore((state)=>state["Home"]["Flex110"]);
const Flex110Cb = useFlex110Cb()
const Flex142Props = useStore((state)=>state["Home"]["Flex142"]);
const Flex142IoProps = useIoStore((state)=>state["Home"]["Flex142"]);
const Flex142Cb = useFlex142Cb()
const Flex157Props = useStore((state)=>state["Home"]["Flex157"]);
const Flex157IoProps = useIoStore((state)=>state["Home"]["Flex157"]);
const Flex157Cb = useFlex157Cb()
const TextBox13Props = useStore((state)=>state["Home"]["TextBox13"]);
const TextBox13IoProps = useIoStore((state)=>state["Home"]["TextBox13"]);
const TextBox13Cb = useTextBox13Cb()
const TextBox14Props = useStore((state)=>state["Home"]["TextBox14"]);
const TextBox14IoProps = useIoStore((state)=>state["Home"]["TextBox14"]);
const TextBox14Cb = useTextBox14Cb()
const TextBox15Props = useStore((state)=>state["Home"]["TextBox15"]);
const TextBox15IoProps = useIoStore((state)=>state["Home"]["TextBox15"]);
const TextBox15Cb = useTextBox15Cb()
const TextBox16Props = useStore((state)=>state["Home"]["TextBox16"]);
const TextBox16IoProps = useIoStore((state)=>state["Home"]["TextBox16"]);
const TextBox16Cb = useTextBox16Cb()
const TextBox17Props = useStore((state)=>state["Home"]["TextBox17"]);
const TextBox17IoProps = useIoStore((state)=>state["Home"]["TextBox17"]);
const TextBox17Cb = useTextBox17Cb()
const Button1Props = useStore((state)=>state["Home"]["Button1"]);
const Button1IoProps = useIoStore((state)=>state["Home"]["Button1"]);
const Button1Cb = useButton1Cb()
const Button2Props = useStore((state)=>state["Home"]["Button2"]);
const Button2IoProps = useIoStore((state)=>state["Home"]["Button2"]);
const Button2Cb = useButton2Cb()
const Image4Props = useStore((state)=>state["Home"]["Image4"]);
const Image4IoProps = useIoStore((state)=>state["Home"]["Image4"]);
const Image4Cb = useImage4Cb()
const TextBox21Props = useStore((state)=>state["Home"]["TextBox21"]);
const TextBox21IoProps = useIoStore((state)=>state["Home"]["TextBox21"]);
const TextBox21Cb = useTextBox21Cb()
const TextBox37Props = useStore((state)=>state["Home"]["TextBox37"]);
const TextBox37IoProps = useIoStore((state)=>state["Home"]["TextBox37"]);
const TextBox37Cb = useTextBox37Cb()
const Image6Props = useStore((state)=>state["Home"]["Image6"]);
const Image6IoProps = useIoStore((state)=>state["Home"]["Image6"]);
const Image6Cb = useImage6Cb()
const TextBox25Props = useStore((state)=>state["Home"]["TextBox25"]);
const TextBox25IoProps = useIoStore((state)=>state["Home"]["TextBox25"]);
const TextBox25Cb = useTextBox25Cb()
const TextBox26Props = useStore((state)=>state["Home"]["TextBox26"]);
const TextBox26IoProps = useIoStore((state)=>state["Home"]["TextBox26"]);
const TextBox26Cb = useTextBox26Cb()
const Button5Props = useStore((state)=>state["Home"]["Button5"]);
const Button5IoProps = useIoStore((state)=>state["Home"]["Button5"]);
const Button5Cb = useButton5Cb()
const Button6Props = useStore((state)=>state["Home"]["Button6"]);
const Button6IoProps = useIoStore((state)=>state["Home"]["Button6"]);
const Button6Cb = useButton6Cb()
const TextBox27Props = useStore((state)=>state["Home"]["TextBox27"]);
const TextBox27IoProps = useIoStore((state)=>state["Home"]["TextBox27"]);
const TextBox27Cb = useTextBox27Cb()
const TextBox32Props = useStore((state)=>state["Home"]["TextBox32"]);
const TextBox32IoProps = useIoStore((state)=>state["Home"]["TextBox32"]);
const TextBox32Cb = useTextBox32Cb()
const TextBox33Props = useStore((state)=>state["Home"]["TextBox33"]);
const TextBox33IoProps = useIoStore((state)=>state["Home"]["TextBox33"]);
const TextBox33Cb = useTextBox33Cb()
const TextBox34Props = useStore((state)=>state["Home"]["TextBox34"]);
const TextBox34IoProps = useIoStore((state)=>state["Home"]["TextBox34"]);
const TextBox34Cb = useTextBox34Cb()
const TextBox35Props = useStore((state)=>state["Home"]["TextBox35"]);
const TextBox35IoProps = useIoStore((state)=>state["Home"]["TextBox35"]);
const TextBox35Cb = useTextBox35Cb()
const Image15Props = useStore((state)=>state["Home"]["Image15"]);
const Image15IoProps = useIoStore((state)=>state["Home"]["Image15"]);
const Image15Cb = useImage15Cb()
const TextBox44Props = useStore((state)=>state["Home"]["TextBox44"]);
const TextBox44IoProps = useIoStore((state)=>state["Home"]["TextBox44"]);
const TextBox44Cb = useTextBox44Cb()
const TextBox42Props = useStore((state)=>state["Home"]["TextBox42"]);
const TextBox42IoProps = useIoStore((state)=>state["Home"]["TextBox42"]);
const TextBox42Cb = useTextBox42Cb()
const TextBox43Props = useStore((state)=>state["Home"]["TextBox43"]);
const TextBox43IoProps = useIoStore((state)=>state["Home"]["TextBox43"]);
const TextBox43Cb = useTextBox43Cb()
const TextBox53Props = useStore((state)=>state["Home"]["TextBox53"]);
const TextBox53IoProps = useIoStore((state)=>state["Home"]["TextBox53"]);
const TextBox53Cb = useTextBox53Cb()
const Image18Props = useStore((state)=>state["Home"]["Image18"]);
const Image18IoProps = useIoStore((state)=>state["Home"]["Image18"]);
const Image18Cb = useImage18Cb()
const TextBox51Props = useStore((state)=>state["Home"]["TextBox51"]);
const TextBox51IoProps = useIoStore((state)=>state["Home"]["TextBox51"]);
const TextBox51Cb = useTextBox51Cb()
const TextBox52Props = useStore((state)=>state["Home"]["TextBox52"]);
const TextBox52IoProps = useIoStore((state)=>state["Home"]["TextBox52"]);
const TextBox52Cb = useTextBox52Cb()
const TextBox50Props = useStore((state)=>state["Home"]["TextBox50"]);
const TextBox50IoProps = useIoStore((state)=>state["Home"]["TextBox50"]);
const TextBox50Cb = useTextBox50Cb()
const Image17Props = useStore((state)=>state["Home"]["Image17"]);
const Image17IoProps = useIoStore((state)=>state["Home"]["Image17"]);
const Image17Cb = useImage17Cb()
const TextBox48Props = useStore((state)=>state["Home"]["TextBox48"]);
const TextBox48IoProps = useIoStore((state)=>state["Home"]["TextBox48"]);
const TextBox48Cb = useTextBox48Cb()
const TextBox49Props = useStore((state)=>state["Home"]["TextBox49"]);
const TextBox49IoProps = useIoStore((state)=>state["Home"]["TextBox49"]);
const TextBox49Cb = useTextBox49Cb()
const TextBox56Props = useStore((state)=>state["Home"]["TextBox56"]);
const TextBox56IoProps = useIoStore((state)=>state["Home"]["TextBox56"]);
const TextBox56Cb = useTextBox56Cb()
const Image19Props = useStore((state)=>state["Home"]["Image19"]);
const Image19IoProps = useIoStore((state)=>state["Home"]["Image19"]);
const Image19Cb = useImage19Cb()
const TextBox54Props = useStore((state)=>state["Home"]["TextBox54"]);
const TextBox54IoProps = useIoStore((state)=>state["Home"]["TextBox54"]);
const TextBox54Cb = useTextBox54Cb()
const TextBox55Props = useStore((state)=>state["Home"]["TextBox55"]);
const TextBox55IoProps = useIoStore((state)=>state["Home"]["TextBox55"]);
const TextBox55Cb = useTextBox55Cb()
const TextBox58Props = useStore((state)=>state["Home"]["TextBox58"]);
const TextBox58IoProps = useIoStore((state)=>state["Home"]["TextBox58"]);
const TextBox58Cb = useTextBox58Cb()
const Button7Props = useStore((state)=>state["Home"]["Button7"]);
const Button7IoProps = useIoStore((state)=>state["Home"]["Button7"]);
const Button7Cb = useButton7Cb()
const Button8Props = useStore((state)=>state["Home"]["Button8"]);
const Button8IoProps = useIoStore((state)=>state["Home"]["Button8"]);
const Button8Cb = useButton8Cb()
const Flex80Props = useStore((state)=>state["Home"]["Flex80"]);
const Flex80IoProps = useIoStore((state)=>state["Home"]["Flex80"]);
const Flex80Cb = useFlex80Cb()
const Image24Props = useStore((state)=>state["Home"]["Image24"]);
const Image24IoProps = useIoStore((state)=>state["Home"]["Image24"]);
const Image24Cb = useImage24Cb()
const TextBox72Props = useStore((state)=>state["Home"]["TextBox72"]);
const TextBox72IoProps = useIoStore((state)=>state["Home"]["TextBox72"]);
const TextBox72Cb = useTextBox72Cb()
const TextBox73Props = useStore((state)=>state["Home"]["TextBox73"]);
const TextBox73IoProps = useIoStore((state)=>state["Home"]["TextBox73"]);
const TextBox73Cb = useTextBox73Cb()
const TextBox74Props = useStore((state)=>state["Home"]["TextBox74"]);
const TextBox74IoProps = useIoStore((state)=>state["Home"]["TextBox74"]);
const TextBox74Cb = useTextBox74Cb()
const Button11Props = useStore((state)=>state["Home"]["Button11"]);
const Button11IoProps = useIoStore((state)=>state["Home"]["Button11"]);
const Button11Cb = useButton11Cb()
const Button12Props = useStore((state)=>state["Home"]["Button12"]);
const Button12IoProps = useIoStore((state)=>state["Home"]["Button12"]);
const Button12Cb = useButton12Cb()
const Image25Props = useStore((state)=>state["Home"]["Image25"]);
const Image25IoProps = useIoStore((state)=>state["Home"]["Image25"]);
const Image25Cb = useImage25Cb()
const TextBox79Props = useStore((state)=>state["Home"]["TextBox79"]);
const TextBox79IoProps = useIoStore((state)=>state["Home"]["TextBox79"]);
const TextBox79Cb = useTextBox79Cb()
const TextBox78Props = useStore((state)=>state["Home"]["TextBox78"]);
const TextBox78IoProps = useIoStore((state)=>state["Home"]["TextBox78"]);
const TextBox78Cb = useTextBox78Cb()
const TextBox81Props = useStore((state)=>state["Home"]["TextBox81"]);
const TextBox81IoProps = useIoStore((state)=>state["Home"]["TextBox81"]);
const TextBox81Cb = useTextBox81Cb()
const TextBox82Props = useStore((state)=>state["Home"]["TextBox82"]);
const TextBox82IoProps = useIoStore((state)=>state["Home"]["TextBox82"]);
const TextBox82Cb = useTextBox82Cb()
const Image33Props = useStore((state)=>state["Home"]["Image33"]);
const Image33IoProps = useIoStore((state)=>state["Home"]["Image33"]);
const Image33Cb = useImage33Cb()
const TextBox90Props = useStore((state)=>state["Home"]["TextBox90"]);
const TextBox90IoProps = useIoStore((state)=>state["Home"]["TextBox90"]);
const TextBox90Cb = useTextBox90Cb()
const TextBox94Props = useStore((state)=>state["Home"]["TextBox94"]);
const TextBox94IoProps = useIoStore((state)=>state["Home"]["TextBox94"]);
const TextBox94Cb = useTextBox94Cb()
const TextBox99Props = useStore((state)=>state["Home"]["TextBox99"]);
const TextBox99IoProps = useIoStore((state)=>state["Home"]["TextBox99"]);
const TextBox99Cb = useTextBox99Cb()
const Image32Props = useStore((state)=>state["Home"]["Image32"]);
const Image32IoProps = useIoStore((state)=>state["Home"]["Image32"]);
const Image32Cb = useImage32Cb()
const TextBox88Props = useStore((state)=>state["Home"]["TextBox88"]);
const TextBox88IoProps = useIoStore((state)=>state["Home"]["TextBox88"]);
const TextBox88Cb = useTextBox88Cb()
const TextBox93Props = useStore((state)=>state["Home"]["TextBox93"]);
const TextBox93IoProps = useIoStore((state)=>state["Home"]["TextBox93"]);
const TextBox93Cb = useTextBox93Cb()
const TextBox98Props = useStore((state)=>state["Home"]["TextBox98"]);
const TextBox98IoProps = useIoStore((state)=>state["Home"]["TextBox98"]);
const TextBox98Cb = useTextBox98Cb()
const Image30Props = useStore((state)=>state["Home"]["Image30"]);
const Image30IoProps = useIoStore((state)=>state["Home"]["Image30"]);
const Image30Cb = useImage30Cb()
const TextBox85Props = useStore((state)=>state["Home"]["TextBox85"]);
const TextBox85IoProps = useIoStore((state)=>state["Home"]["TextBox85"]);
const TextBox85Cb = useTextBox85Cb()
const TextBox91Props = useStore((state)=>state["Home"]["TextBox91"]);
const TextBox91IoProps = useIoStore((state)=>state["Home"]["TextBox91"]);
const TextBox91Cb = useTextBox91Cb()
const TextBox96Props = useStore((state)=>state["Home"]["TextBox96"]);
const TextBox96IoProps = useIoStore((state)=>state["Home"]["TextBox96"]);
const TextBox96Cb = useTextBox96Cb()
const Image31Props = useStore((state)=>state["Home"]["Image31"]);
const Image31IoProps = useIoStore((state)=>state["Home"]["Image31"]);
const Image31Cb = useImage31Cb()
const TextBox86Props = useStore((state)=>state["Home"]["TextBox86"]);
const TextBox86IoProps = useIoStore((state)=>state["Home"]["TextBox86"]);
const TextBox86Cb = useTextBox86Cb()
const TextBox92Props = useStore((state)=>state["Home"]["TextBox92"]);
const TextBox92IoProps = useIoStore((state)=>state["Home"]["TextBox92"]);
const TextBox92Cb = useTextBox92Cb()
const TextBox97Props = useStore((state)=>state["Home"]["TextBox97"]);
const TextBox97IoProps = useIoStore((state)=>state["Home"]["TextBox97"]);
const TextBox97Cb = useTextBox97Cb()
const TextBox105Props = useStore((state)=>state["Home"]["TextBox105"]);
const TextBox105IoProps = useIoStore((state)=>state["Home"]["TextBox105"]);
const TextBox105Cb = useTextBox105Cb()
const TextBox106Props = useStore((state)=>state["Home"]["TextBox106"]);
const TextBox106IoProps = useIoStore((state)=>state["Home"]["TextBox106"]);
const TextBox106Cb = useTextBox106Cb()
const Image35Props = useStore((state)=>state["Home"]["Image35"]);
const Image35IoProps = useIoStore((state)=>state["Home"]["Image35"]);
const Image35Cb = useImage35Cb()
const TextBox101Props = useStore((state)=>state["Home"]["TextBox101"]);
const TextBox101IoProps = useIoStore((state)=>state["Home"]["TextBox101"]);
const TextBox101Cb = useTextBox101Cb()
const TextBox107Props = useStore((state)=>state["Home"]["TextBox107"]);
const TextBox107IoProps = useIoStore((state)=>state["Home"]["TextBox107"]);
const TextBox107Cb = useTextBox107Cb()
const TextBox108Props = useStore((state)=>state["Home"]["TextBox108"]);
const TextBox108IoProps = useIoStore((state)=>state["Home"]["TextBox108"]);
const TextBox108Cb = useTextBox108Cb()
const TextBox109Props = useStore((state)=>state["Home"]["TextBox109"]);
const TextBox109IoProps = useIoStore((state)=>state["Home"]["TextBox109"]);
const TextBox109Cb = useTextBox109Cb()
const Image36Props = useStore((state)=>state["Home"]["Image36"]);
const Image36IoProps = useIoStore((state)=>state["Home"]["Image36"]);
const Image36Cb = useImage36Cb()
const TextBox110Props = useStore((state)=>state["Home"]["TextBox110"]);
const TextBox110IoProps = useIoStore((state)=>state["Home"]["TextBox110"]);
const TextBox110Cb = useTextBox110Cb()
const TextBox111Props = useStore((state)=>state["Home"]["TextBox111"]);
const TextBox111IoProps = useIoStore((state)=>state["Home"]["TextBox111"]);
const TextBox111Cb = useTextBox111Cb()
const TextBox112Props = useStore((state)=>state["Home"]["TextBox112"]);
const TextBox112IoProps = useIoStore((state)=>state["Home"]["TextBox112"]);
const TextBox112Cb = useTextBox112Cb()
const Image37Props = useStore((state)=>state["Home"]["Image37"]);
const Image37IoProps = useIoStore((state)=>state["Home"]["Image37"]);
const Image37Cb = useImage37Cb()
const TextBox113Props = useStore((state)=>state["Home"]["TextBox113"]);
const TextBox113IoProps = useIoStore((state)=>state["Home"]["TextBox113"]);
const TextBox113Cb = useTextBox113Cb()
const Image38Props = useStore((state)=>state["Home"]["Image38"]);
const Image38IoProps = useIoStore((state)=>state["Home"]["Image38"]);
const Image38Cb = useImage38Cb()
const TextBox114Props = useStore((state)=>state["Home"]["TextBox114"]);
const TextBox114IoProps = useIoStore((state)=>state["Home"]["TextBox114"]);
const TextBox114Cb = useTextBox114Cb()
const TextBox115Props = useStore((state)=>state["Home"]["TextBox115"]);
const TextBox115IoProps = useIoStore((state)=>state["Home"]["TextBox115"]);
const TextBox115Cb = useTextBox115Cb()
const TextBox116Props = useStore((state)=>state["Home"]["TextBox116"]);
const TextBox116IoProps = useIoStore((state)=>state["Home"]["TextBox116"]);
const TextBox116Cb = useTextBox116Cb()
const Button19Props = useStore((state)=>state["Home"]["Button19"]);
const Button19IoProps = useIoStore((state)=>state["Home"]["Button19"]);
const Button19Cb = useButton19Cb()
const Button20Props = useStore((state)=>state["Home"]["Button20"]);
const Button20IoProps = useIoStore((state)=>state["Home"]["Button20"]);
const Button20Cb = useButton20Cb()
const TextBox117Props = useStore((state)=>state["Home"]["TextBox117"]);
const TextBox117IoProps = useIoStore((state)=>state["Home"]["TextBox117"]);
const TextBox117Cb = useTextBox117Cb()
const TextBox118Props = useStore((state)=>state["Home"]["TextBox118"]);
const TextBox118IoProps = useIoStore((state)=>state["Home"]["TextBox118"]);
const TextBox118Cb = useTextBox118Cb()
const Button21Props = useStore((state)=>state["Home"]["Button21"]);
const Button21IoProps = useIoStore((state)=>state["Home"]["Button21"]);
const Button21Cb = useButton21Cb()
const Button22Props = useStore((state)=>state["Home"]["Button22"]);
const Button22IoProps = useIoStore((state)=>state["Home"]["Button22"]);
const Button22Cb = useButton22Cb()
const Image39Props = useStore((state)=>state["Home"]["Image39"]);
const Image39IoProps = useIoStore((state)=>state["Home"]["Image39"]);
const Image39Cb = useImage39Cb()
const TextBox120Props = useStore((state)=>state["Home"]["TextBox120"]);
const TextBox120IoProps = useIoStore((state)=>state["Home"]["TextBox120"]);
const TextBox120Cb = useTextBox120Cb()
const Image40Props = useStore((state)=>state["Home"]["Image40"]);
const Image40IoProps = useIoStore((state)=>state["Home"]["Image40"]);
const Image40Cb = useImage40Cb()
const Image41Props = useStore((state)=>state["Home"]["Image41"]);
const Image41IoProps = useIoStore((state)=>state["Home"]["Image41"]);
const Image41Cb = useImage41Cb()
const TextBox121Props = useStore((state)=>state["Home"]["TextBox121"]);
const TextBox121IoProps = useIoStore((state)=>state["Home"]["TextBox121"]);
const TextBox121Cb = useTextBox121Cb()
const TextBox122Props = useStore((state)=>state["Home"]["TextBox122"]);
const TextBox122IoProps = useIoStore((state)=>state["Home"]["TextBox122"]);
const TextBox122Cb = useTextBox122Cb()
const TextBox123Props = useStore((state)=>state["Home"]["TextBox123"]);
const TextBox123IoProps = useIoStore((state)=>state["Home"]["TextBox123"]);
const TextBox123Cb = useTextBox123Cb()
const Rating1Props = useStore((state)=>state["Home"]["Rating1"]);
const Rating1IoProps = useIoStore((state)=>state["Home"]["Rating1"]);
const Rating1Cb = useRating1Cb()
const Image42Props = useStore((state)=>state["Home"]["Image42"]);
const Image42IoProps = useIoStore((state)=>state["Home"]["Image42"]);
const Image42Cb = useImage42Cb()
const TextBox124Props = useStore((state)=>state["Home"]["TextBox124"]);
const TextBox124IoProps = useIoStore((state)=>state["Home"]["TextBox124"]);
const TextBox124Cb = useTextBox124Cb()
const TextBox128Props = useStore((state)=>state["Home"]["TextBox128"]);
const TextBox128IoProps = useIoStore((state)=>state["Home"]["TextBox128"]);
const TextBox128Cb = useTextBox128Cb()
const TextBox129Props = useStore((state)=>state["Home"]["TextBox129"]);
const TextBox129IoProps = useIoStore((state)=>state["Home"]["TextBox129"]);
const TextBox129Cb = useTextBox129Cb()
const TextBox130Props = useStore((state)=>state["Home"]["TextBox130"]);
const TextBox130IoProps = useIoStore((state)=>state["Home"]["TextBox130"]);
const TextBox130Cb = useTextBox130Cb()

  return (<>
  <Flex className="p-Home Flex14 bpt" {...Flex14Props} {...Flex14Cb} {...Flex14IoProps}>
<Flex className="p-Home Flex15 bpt" {...Flex15Props} {...Flex15Cb} {...Flex15IoProps}>
<Flex className="p-Home Flex18 bpt" {...Flex18Props} {...Flex18Cb} {...Flex18IoProps}>
<Image className="p-Home Image4 bpt" {...Image4Props} {...Image4Cb} {...Image4IoProps}/>
<TextBox className="p-Home TextBox21 bpt" {...TextBox21Props} {...TextBox21Cb} {...TextBox21IoProps}/>
</Flex>
<TextBox className="p-Home TextBox13 bpt" {...TextBox13Props} {...TextBox13Cb} {...TextBox13IoProps}/>
<TextBox className="p-Home TextBox14 bpt" {...TextBox14Props} {...TextBox14Cb} {...TextBox14IoProps}/>
<TextBox className="p-Home TextBox15 bpt" {...TextBox15Props} {...TextBox15Cb} {...TextBox15IoProps}/>
<TextBox className="p-Home TextBox16 bpt" {...TextBox16Props} {...TextBox16Cb} {...TextBox16IoProps}/>
<TextBox className="p-Home TextBox17 bpt" {...TextBox17Props} {...TextBox17Cb} {...TextBox17IoProps}/>
<Flex className="p-Home Flex17 bpt" {...Flex17Props} {...Flex17Cb} {...Flex17IoProps}>
<Button className="p-Home Button1 bpt" {...Button1Props} {...Button1Cb} {...Button1IoProps}/>
<Button className="p-Home Button2 bpt" {...Button2Props} {...Button2Cb} {...Button2IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Flex19 bpt" {...Flex19Props} {...Flex19Cb} {...Flex19IoProps}>
<TextBox className="p-Home TextBox37 bpt" {...TextBox37Props} {...TextBox37Cb} {...TextBox37IoProps}/>
<Flex className="p-Home Flex22 bpt" {...Flex22Props} {...Flex22Cb} {...Flex22IoProps}>
<Flex className="p-Home Flex24 bpt" {...Flex24Props} {...Flex24Cb} {...Flex24IoProps}>
<Flex className="p-Home Flex26 bpt" {...Flex26Props} {...Flex26Cb} {...Flex26IoProps}>
<TextBox className="p-Home TextBox26 bpt" {...TextBox26Props} {...TextBox26Cb} {...TextBox26IoProps}/>
<TextBox className="p-Home TextBox25 bpt" {...TextBox25Props} {...TextBox25Cb} {...TextBox25IoProps}/>
<Flex className="p-Home Flex25 bpt" {...Flex25Props} {...Flex25Cb} {...Flex25IoProps}>
<Button className="p-Home Button5 bpt" {...Button5Props} {...Button5Cb} {...Button5IoProps}/>
<Button className="p-Home Button6 bpt" {...Button6Props} {...Button6Cb} {...Button6IoProps}/>
</Flex>
</Flex>
</Flex>
<Image className="p-Home Image6 bpt" {...Image6Props} {...Image6Cb} {...Image6IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex33 bpt" {...Flex33Props} {...Flex33Cb} {...Flex33IoProps}>
<TextBox className="p-Home TextBox27 bpt" {...TextBox27Props} {...TextBox27Cb} {...TextBox27IoProps}/>
</Flex>
<Flex className="p-Home Flex34 bpt" {...Flex34Props} {...Flex34Cb} {...Flex34IoProps}>
<TextBox className="p-Home TextBox32 bpt" {...TextBox32Props} {...TextBox32Cb} {...TextBox32IoProps}/>
<TextBox className="p-Home TextBox33 bpt" {...TextBox33Props} {...TextBox33Cb} {...TextBox33IoProps}/>
<TextBox className="p-Home TextBox34 bpt" {...TextBox34Props} {...TextBox34Cb} {...TextBox34IoProps}/>
<TextBox className="p-Home TextBox35 bpt" {...TextBox35Props} {...TextBox35Cb} {...TextBox35IoProps}/>
</Flex>
<Flex className="p-Home Flex54 bpt" {...Flex54Props} {...Flex54Cb} {...Flex54IoProps}>
<TextBox className="p-Home TextBox58 bpt" {...TextBox58Props} {...TextBox58Cb} {...TextBox58IoProps}/>
</Flex>
<Flex className="p-Home Flex35 bpt" {...Flex35Props} {...Flex35Cb} {...Flex35IoProps}>
<Flex className="p-Home Flex46 bpt" {...Flex46Props} {...Flex46Cb} {...Flex46IoProps}>
<Flex className="p-Home Flex52 bpt" {...Flex52Props} {...Flex52Cb} {...Flex52IoProps}>
<Image className="p-Home Image19 bpt" {...Image19Props} {...Image19Cb} {...Image19IoProps}/>
<TextBox className="p-Home TextBox56 bpt" {...TextBox56Props} {...TextBox56Cb} {...TextBox56IoProps}/>
<Flex className="p-Home Flex51 bpt" {...Flex51Props} {...Flex51Cb} {...Flex51IoProps}>
<TextBox className="p-Home TextBox54 bpt" {...TextBox54Props} {...TextBox54Cb} {...TextBox54IoProps}/>
<TextBox className="p-Home TextBox55 bpt" {...TextBox55Props} {...TextBox55Cb} {...TextBox55IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Flex44 bpt" {...Flex44Props} {...Flex44Cb} {...Flex44IoProps}>
<Flex className="p-Home Flex50 bpt" {...Flex50Props} {...Flex50Cb} {...Flex50IoProps}>
<Image className="p-Home Image18 bpt" {...Image18Props} {...Image18Cb} {...Image18IoProps}/>
<TextBox className="p-Home TextBox53 bpt" {...TextBox53Props} {...TextBox53Cb} {...TextBox53IoProps}/>
<Flex className="p-Home Flex49 bpt" {...Flex49Props} {...Flex49Cb} {...Flex49IoProps}>
<TextBox className="p-Home TextBox51 bpt" {...TextBox51Props} {...TextBox51Cb} {...TextBox51IoProps}/>
<TextBox className="p-Home TextBox52 bpt" {...TextBox52Props} {...TextBox52Cb} {...TextBox52IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Flex39 bpt" {...Flex39Props} {...Flex39Cb} {...Flex39IoProps}>
<Flex className="p-Home Flex40 bpt" {...Flex40Props} {...Flex40Cb} {...Flex40IoProps}>
<Image className="p-Home Image15 bpt" {...Image15Props} {...Image15Cb} {...Image15IoProps}/>
<TextBox className="p-Home TextBox44 bpt" {...TextBox44Props} {...TextBox44Cb} {...TextBox44IoProps}/>
<Flex className="p-Home Flex41 bpt" {...Flex41Props} {...Flex41Cb} {...Flex41IoProps}>
<TextBox className="p-Home TextBox43 bpt" {...TextBox43Props} {...TextBox43Cb} {...TextBox43IoProps}/>
<TextBox className="p-Home TextBox42 bpt" {...TextBox42Props} {...TextBox42Cb} {...TextBox42IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Flex45 bpt" {...Flex45Props} {...Flex45Cb} {...Flex45IoProps}>
<Flex className="p-Home Flex48 bpt" {...Flex48Props} {...Flex48Cb} {...Flex48IoProps}>
<Image className="p-Home Image17 bpt" {...Image17Props} {...Image17Cb} {...Image17IoProps}/>
<TextBox className="p-Home TextBox50 bpt" {...TextBox50Props} {...TextBox50Cb} {...TextBox50IoProps}/>
<Flex className="p-Home Flex47 bpt" {...Flex47Props} {...Flex47Cb} {...Flex47IoProps}>
<TextBox className="p-Home TextBox48 bpt" {...TextBox48Props} {...TextBox48Cb} {...TextBox48IoProps}/>
<TextBox className="p-Home TextBox49 bpt" {...TextBox49Props} {...TextBox49Cb} {...TextBox49IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Flex70 bpt" {...Flex70Props} {...Flex70Cb} {...Flex70IoProps}>
<Flex className="p-Home Flex67 bpt" {...Flex67Props} {...Flex67Cb} {...Flex67IoProps}>
<Flex className="p-Home Flex71 bpt" {...Flex71Props} {...Flex71Cb} {...Flex71IoProps}>
<Button className="p-Home Button8 bpt" {...Button8Props} {...Button8Cb} {...Button8IoProps}/>
<Button className="p-Home Button7 bpt" {...Button7Props} {...Button7Cb} {...Button7IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Flex75 bpt" {...Flex75Props} {...Flex75Cb} {...Flex75IoProps}>
<Flex className="p-Home Flex80 bpt" {...Flex80Props} {...Flex80Cb} {...Flex80IoProps}/>
<Flex className="p-Home Flex76 bpt" {...Flex76Props} {...Flex76Cb} {...Flex76IoProps}>
<Image className="p-Home Image24 bpt" {...Image24Props} {...Image24Cb} {...Image24IoProps}/>
<Flex className="p-Home Flex78 bpt" {...Flex78Props} {...Flex78Cb} {...Flex78IoProps}>
<Image className="p-Home Image25 bpt" {...Image25Props} {...Image25Cb} {...Image25IoProps}/>
</Flex>
<Flex className="p-Home Flex77 bpt" {...Flex77Props} {...Flex77Cb} {...Flex77IoProps}>
<TextBox className="p-Home TextBox74 bpt" {...TextBox74Props} {...TextBox74Cb} {...TextBox74IoProps}/>
<TextBox className="p-Home TextBox73 bpt" {...TextBox73Props} {...TextBox73Cb} {...TextBox73IoProps}/>
<TextBox className="p-Home TextBox72 bpt" {...TextBox72Props} {...TextBox72Cb} {...TextBox72IoProps}/>
<Flex className="p-Home Flex81 bpt" {...Flex81Props} {...Flex81Cb} {...Flex81IoProps}>
<Button className="p-Home Button12 bpt" {...Button12Props} {...Button12Cb} {...Button12IoProps}/>
<Button className="p-Home Button11 bpt" {...Button11Props} {...Button11Cb} {...Button11IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Flex87 bpt" {...Flex87Props} {...Flex87Cb} {...Flex87IoProps}>
<Flex className="p-Home Flex86 bpt" {...Flex86Props} {...Flex86Cb} {...Flex86IoProps}>
<TextBox className="p-Home TextBox78 bpt" {...TextBox78Props} {...TextBox78Cb} {...TextBox78IoProps}/>
</Flex>
<TextBox className="p-Home TextBox79 bpt" {...TextBox79Props} {...TextBox79Cb} {...TextBox79IoProps}/>
<Flex className="p-Home Flex90 bpt" {...Flex90Props} {...Flex90Cb} {...Flex90IoProps}>
<TextBox className="p-Home TextBox81 bpt" {...TextBox81Props} {...TextBox81Cb} {...TextBox81IoProps}/>
</Flex>
</Flex>
<TextBox className="p-Home TextBox95 bpt" {...TextBox95Props} {...TextBox95Cb} {...TextBox95IoProps}/>
<Flex className="p-Home Flex95 bpt" {...Flex95Props} {...Flex95Cb} {...Flex95IoProps}>
<Flex className="p-Home Flex97 bpt" {...Flex97Props} {...Flex97Cb} {...Flex97IoProps}>
<TextBox className="p-Home TextBox85 bpt" {...TextBox85Props} {...TextBox85Cb} {...TextBox85IoProps}/>
<TextBox className="p-Home TextBox91 bpt" {...TextBox91Props} {...TextBox91Cb} {...TextBox91IoProps}/>
<Image className="p-Home Image30 bpt" {...Image30Props} {...Image30Cb} {...Image30IoProps}/>
<Flex className="p-Home Flex99 bpt" {...Flex99Props} {...Flex99Cb} {...Flex99IoProps}>
<TextBox className="p-Home TextBox96 bpt" {...TextBox96Props} {...TextBox96Cb} {...TextBox96IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex98 bpt" {...Flex98Props} {...Flex98Cb} {...Flex98IoProps}>
<TextBox className="p-Home TextBox92 bpt" {...TextBox92Props} {...TextBox92Cb} {...TextBox92IoProps}/>
<TextBox className="p-Home TextBox86 bpt" {...TextBox86Props} {...TextBox86Cb} {...TextBox86IoProps}/>
<Image className="p-Home Image31 bpt" {...Image31Props} {...Image31Cb} {...Image31IoProps}/>
<TextBox className="p-Home TextBox97 bpt" {...TextBox97Props} {...TextBox97Cb} {...TextBox97IoProps}/>
</Flex>
<Flex className="p-Home Flex96 bpt" {...Flex96Props} {...Flex96Cb} {...Flex96IoProps}>
<TextBox className="p-Home TextBox88 bpt" {...TextBox88Props} {...TextBox88Cb} {...TextBox88IoProps}/>
<TextBox className="p-Home TextBox93 bpt" {...TextBox93Props} {...TextBox93Cb} {...TextBox93IoProps}/>
<Image className="p-Home Image32 bpt" {...Image32Props} {...Image32Cb} {...Image32IoProps}/>
<TextBox className="p-Home TextBox98 bpt" {...TextBox98Props} {...TextBox98Cb} {...TextBox98IoProps}/>
</Flex>
<Flex className="p-Home Flex94 bpt" {...Flex94Props} {...Flex94Cb} {...Flex94IoProps}>
<TextBox className="p-Home TextBox90 bpt" {...TextBox90Props} {...TextBox90Cb} {...TextBox90IoProps}/>
<TextBox className="p-Home TextBox94 bpt" {...TextBox94Props} {...TextBox94Cb} {...TextBox94IoProps}/>
<Image className="p-Home Image33 bpt" {...Image33Props} {...Image33Cb} {...Image33IoProps}/>
<TextBox className="p-Home TextBox99 bpt" {...TextBox99Props} {...TextBox99Cb} {...TextBox99IoProps}/>
</Flex>
<Flex className="p-Home Flex93 bpt" {...Flex93Props} {...Flex93Cb} {...Flex93IoProps}>
<TextBox className="p-Home TextBox82 bpt" {...TextBox82Props} {...TextBox82Cb} {...TextBox82IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex106 bpt" {...Flex106Props} {...Flex106Cb} {...Flex106IoProps}>
<Flex className="p-Home Flex102 bpt" {...Flex102Props} {...Flex102Cb} {...Flex102IoProps}>
<TextBox className="p-Home TextBox106 bpt" {...TextBox106Props} {...TextBox106Cb} {...TextBox106IoProps}/>
<TextBox className="p-Home TextBox105 bpt" {...TextBox105Props} {...TextBox105Cb} {...TextBox105IoProps}/>
<Image className="p-Home Image35 bpt" {...Image35Props} {...Image35Cb} {...Image35IoProps}/>
<Flex className="p-Home Flex100 bpt" {...Flex100Props} {...Flex100Cb} {...Flex100IoProps}>
<TextBox className="p-Home TextBox101 bpt" {...TextBox101Props} {...TextBox101Cb} {...TextBox101IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex103 bpt" {...Flex103Props} {...Flex103Cb} {...Flex103IoProps}>
<TextBox className="p-Home TextBox109 bpt" {...TextBox109Props} {...TextBox109Cb} {...TextBox109IoProps}/>
<TextBox className="p-Home TextBox108 bpt" {...TextBox108Props} {...TextBox108Cb} {...TextBox108IoProps}/>
<Image className="p-Home Image36 bpt" {...Image36Props} {...Image36Cb} {...Image36IoProps}/>
<TextBox className="p-Home TextBox107 bpt" {...TextBox107Props} {...TextBox107Cb} {...TextBox107IoProps}/>
</Flex>
<Flex className="p-Home Flex111 bpt" {...Flex111Props} {...Flex111Cb} {...Flex111IoProps}>
<Flex className="p-Home Flex112 bpt" {...Flex112Props} {...Flex112Cb} {...Flex112IoProps}>
<TextBox className="p-Home TextBox114 bpt" {...TextBox114Props} {...TextBox114Cb} {...TextBox114IoProps}/>
<TextBox className="p-Home TextBox115 bpt" {...TextBox115Props} {...TextBox115Cb} {...TextBox115IoProps}/>
<Image className="p-Home Image38 bpt" {...Image38Props} {...Image38Cb} {...Image38IoProps}/>
<TextBox className="p-Home TextBox116 bpt" {...TextBox116Props} {...TextBox116Cb} {...TextBox116IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex104 bpt" {...Flex104Props} {...Flex104Cb} {...Flex104IoProps}>
<TextBox className="p-Home TextBox112 bpt" {...TextBox112Props} {...TextBox112Cb} {...TextBox112IoProps}/>
<TextBox className="p-Home TextBox111 bpt" {...TextBox111Props} {...TextBox111Cb} {...TextBox111IoProps}/>
<Image className="p-Home Image37 bpt" {...Image37Props} {...Image37Cb} {...Image37IoProps}/>
<TextBox className="p-Home TextBox110 bpt" {...TextBox110Props} {...TextBox110Cb} {...TextBox110IoProps}/>
</Flex>
<Flex className="p-Home Flex105 bpt" {...Flex105Props} {...Flex105Cb} {...Flex105IoProps}>
<TextBox className="p-Home TextBox113 bpt" {...TextBox113Props} {...TextBox113Cb} {...TextBox113IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex110 bpt" {...Flex110Props} {...Flex110Cb} {...Flex110IoProps}/>
<Flex className="p-Home Flex113 bpt" {...Flex113Props} {...Flex113Cb} {...Flex113IoProps}>
<Flex className="p-Home Flex116 bpt" {...Flex116Props} {...Flex116Cb} {...Flex116IoProps}>
<Flex className="p-Home Flex115 bpt" {...Flex115Props} {...Flex115Cb} {...Flex115IoProps}>
<Button className="p-Home Button19 bpt" {...Button19Props} {...Button19Cb} {...Button19IoProps}/>
<Button className="p-Home Button20 bpt" {...Button20Props} {...Button20Cb} {...Button20IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Flex114 bpt" {...Flex114Props} {...Flex114Cb} {...Flex114IoProps}>
<Flex className="p-Home Flex117 bpt" {...Flex117Props} {...Flex117Cb} {...Flex117IoProps}>
<TextBox className="p-Home TextBox117 bpt" {...TextBox117Props} {...TextBox117Cb} {...TextBox117IoProps}/>
<TextBox className="p-Home TextBox118 bpt" {...TextBox118Props} {...TextBox118Cb} {...TextBox118IoProps}/>
<Flex className="p-Home Flex119 bpt" {...Flex119Props} {...Flex119Cb} {...Flex119IoProps}>
<Button className="p-Home Button22 bpt" {...Button22Props} {...Button22Cb} {...Button22IoProps}/>
<Button className="p-Home Button21 bpt" {...Button21Props} {...Button21Cb} {...Button21IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex118 bpt" {...Flex118Props} {...Flex118Cb} {...Flex118IoProps}>
<Image className="p-Home Image39 bpt" {...Image39Props} {...Image39Cb} {...Image39IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex129 bpt" {...Flex129Props} {...Flex129Cb} {...Flex129IoProps}>
<TextBox className="p-Home TextBox120 bpt" {...TextBox120Props} {...TextBox120Cb} {...TextBox120IoProps}/>
</Flex>
<Flex className="p-Home Flex130 bpt" {...Flex130Props} {...Flex130Cb} {...Flex130IoProps}>
<Flex className="p-Home Flex136 bpt" {...Flex136Props} {...Flex136Cb} {...Flex136IoProps}>
<Image className="p-Home Image40 bpt" {...Image40Props} {...Image40Cb} {...Image40IoProps}/>
</Flex>
<Flex className="p-Home Flex138 bpt" {...Flex138Props} {...Flex138Cb} {...Flex138IoProps}>
<Flex className="p-Home Flex139 bpt" {...Flex139Props} {...Flex139Cb} {...Flex139IoProps}>
<Rating className="p-Home Rating1 bpt" {...Rating1Props} {...Rating1Cb} {...Rating1IoProps}/>
</Flex>
<TextBox className="p-Home TextBox122 bpt" {...TextBox122Props} {...TextBox122Cb} {...TextBox122IoProps}/>
<TextBox className="p-Home TextBox123 bpt" {...TextBox123Props} {...TextBox123Cb} {...TextBox123IoProps}/>
<Flex className="p-Home Flex140 bpt" {...Flex140Props} {...Flex140Cb} {...Flex140IoProps}>
<Image className="p-Home Image42 bpt" {...Image42Props} {...Image42Cb} {...Image42IoProps}/>
<TextBox className="p-Home TextBox124 bpt" {...TextBox124Props} {...TextBox124Cb} {...TextBox124IoProps}/>
<Flex className="p-Home Flex141 bpt" {...Flex141Props} {...Flex141Cb} {...Flex141IoProps}>
<TextBox className="p-Home TextBox129 bpt" {...TextBox129Props} {...TextBox129Cb} {...TextBox129IoProps}/>
<TextBox className="p-Home TextBox128 bpt" {...TextBox128Props} {...TextBox128Cb} {...TextBox128IoProps}/>
</Flex>
</Flex>
<TextBox className="p-Home TextBox121 bpt" {...TextBox121Props} {...TextBox121Cb} {...TextBox121IoProps}/>
</Flex>
<Flex className="p-Home Flex137 bpt" {...Flex137Props} {...Flex137Cb} {...Flex137IoProps}>
<Image className="p-Home Image41 bpt" {...Image41Props} {...Image41Cb} {...Image41IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex142 bpt" {...Flex142Props} {...Flex142Cb} {...Flex142IoProps}/>
<Flex className="p-Home Flex131 bpt" {...Flex131Props} {...Flex131Cb} {...Flex131IoProps}>
<TextBox className="p-Home TextBox130 bpt" {...TextBox130Props} {...TextBox130Cb} {...TextBox130IoProps}/>
</Flex>
<Flex className="p-Home Flex157 bpt" {...Flex157Props} {...Flex157Cb} {...Flex157IoProps}/>
  </>);
}
