"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RemoveCookies, SetCookies } from "./Cookies";
import { toast } from "sonner"
import Link from "next/link";


const formSchema = z.object({
  hrs: z.string().min(1).max(2),
  min: z.string().min(1).max(3),
  sec: z.string().min(1).max(4),
});

export function SettingsForm() {


  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      hrs: "",
      min: "",
      sec: "",
    },
  });
  async function onSubmit(values: z.infer<typeof formSchema>) {
  RemoveCookies("hrs");
  RemoveCookies("min");
  RemoveCookies("sec");

  SetCookies("hrs", values.hrs);
  SetCookies("min", values.min);
  SetCookies("sec", values.sec);
  toast("Timer Updated to: " + values.hrs + "hrs: " + values.min + "mins: " + values.sec + "secs: ");
}
  return (
    <div className="flex flex-col items-center justify-center gap-4 w-full">
<div className="uppercase font-semibold text-xl mb-5">Timer</div>
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className=" flex flex-col items-center justify-center gap-4 w-[80%]"
      >
        <div className=" flex flex-col md:flex-row items-center justify-center gap-4 w-full">

        <FormField
          control={form.control}
          name="hrs"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Hours</FormLabel>
              <FormControl>
                <Input type="number" className="text-black" placeholder="00" {...field} min={0} />
              </FormControl>
        
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="min"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Minutes</FormLabel>
              <FormControl>
              <Input type="number" className="text-black" placeholder="00" {...field} min={0} />
              </FormControl>
           
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="sec"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Seconds</FormLabel>
              <FormControl>
              <Input type="number" className="text-black" placeholder="00" {...field} min={0} />
              </FormControl>
        
              <FormMessage />
            </FormItem>
          )}
        />
        </div>
        <Button className="w-1/2 bg-pink-500" type="submit">Submit</Button>
      </form>
    </Form>
    <div className="text-sm text-gray-600">Powered by <Link href="https://orglobal.com.ng" target="_blank">Orglobal</Link></div>
    </div>
  );
}
